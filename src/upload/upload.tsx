import { defineComponent, toRefs } from 'vue'
import OSS from 'ali-oss'
import props from './props'
import './index.less'

export default defineComponent({
  name: 'Upload',
  props,
  emits: ['update:fileList'],
  setup(props, { emit }) {
    const { disabled, maxSize, fileType, dir, fileName, fileList } = toRefs(props)
    let client = undefined as any

    const onFileChange = async (e: any) => {
      const inputFiles = e.target.files
      for (const file of inputFiles) {
        const valid = validate(file)
        if (valid) {
          // const base64 = (await getBase64(file)) as string
          // fileList.value.push(base64)
          upload(file)
        }
      }
    }

    /**
     * 校验文件
     * @param file
     * @returns
     */
    const validate = (file: File): boolean => {
      const { size, type } = file
      if (size / 1024 > maxSize.value) {
        console.log(`上传文件的大小限制在${maxSize}KB内`)
        return false
      }
      if (fileType.value !== '*' && fileType.value.indexOf(type.split('/')[1]) < 0) {
        console.log(`只支持上传${fileType.toString()}格式的文件`)
        return false
      }
      return true
    }

    /**
     * 上传文件到服务器
     * @param file
     */
    const upload = (file: File) => {
      debugger
      try {
        const nameList = file.name.split('.')
        const ext = nameList[nameList.length - 1]
        const _fileName = `${dir.value}/${
          fileName.value ?? Date.now() + Number.parseInt(Math.random() * 10000 + '')
        }.${ext}`
        client
          .multipartUpload(_fileName, file, {
            progress: (p: number) => {
              // 获取上传进度。
              console.log(p * 100)
            },
          })
          .then((r: any) => {
            if (r.res.status == 200) {
              const img = `https://xxx.com/${_fileName}`
              fileList.value.push(img)
              emit('update:fileList', fileList.value)
            } else {
              // 上传失败
              getAliOss()
            }
          })
      } catch (error) {
        console.log(error)
        // 上传失败
        getAliOss()
      }
    }

    /** 获取阿里云OSS sts */
    const getAliOss = () => {
      // 获取临时凭证
      client = new OSS({
        region: '你的region',
        accessKeyId: '你的accessKeyId',
        accessKeySecret: '你的accessKeySecret',
        bucket: '你的bucket',
      })
    }

    /**
     * 获取文件base64编码，用于预览
     * @param file
     * @returns
     */
    // const getBase64 = (file: File) => {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = () => resolve(reader.result)
    //     reader.onerror = (error) => reject(error)
    //   })
    // }

    const checkType = (types: string[]) => {
      if (typeof fileType.value === 'string') {
        return types.indexOf(fileType.value) >= 0
      }
      for (let i = 0, length = fileType.value.length; i < length; i++) {
        const el = fileType.value[i]
        if (types.indexOf(el) == -1) {
          return false
        }
      }
      return true
    }

    const isImg = () => {
      const types = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
      return checkType(types)
    }

    const isAudio = () => {
      const types = ['wav', 'mp3']
      return checkType(types)
    }

    const isVideo = () => {
      const types = ['mp4']
      return checkType(types)
    }

    return () => (
      <div class="upload">
        {fileList.value.map((file) => (
          <>
            {isImg() && (
              <div class="upload-img">
                <img src={file} />
              </div>
            )}
            {isVideo() && (
              <div class="upload-img">
                <video src={file} controls />
              </div>
            )}
            {isAudio() && (
              <div class="upload-file">
                <audio src={file} controls />
              </div>
            )}
            {!isImg() && !isVideo() && !isAudio() && (
              <div class="upload-file">
                <a href={file}>{file}</a>
              </div>
            )}
          </>
        ))}
        <div class="upload-add-icon">
          <span> {disabled.value ? '禁用' : '点击上传'}</span>
          {!disabled.value ? (
            <input type="file" multiple onChange={onFileChange} onClick={getAliOss} />
          ) : (
            ''
          )}
        </div>
      </div>
    )
  },
})
