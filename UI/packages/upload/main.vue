<template>
  <div class="upload">
    <div v-for="(file, index) in fileList" :key="index">
      <div class="upload-img" v-if="isImg()">
        <img :src="file" />
      </div>

      <div class="upload-img" v-if="isVideo()">
        <video :src="file" controls></video>
      </div>
      <div class="upload-file" wx:if="isAudio()">
        <audio :src="file" controls></audio>
      </div>
      <div class="upload-file" wx:if="!isImg() && !isVideo() && !isAudio()">
        <a :href="file">{{ file }}</a>
      </div>
    </div>
    <div class="upload-add-icon">
      <span>{{ disabled ? '禁用' : '点击上传' }}</span>
      <input v-if="!disabled" type="file" multiple @change="onFileChange" @click="getAliOss" />
    </div>
  </div>
</template>

<script>
import OSS from 'ali-oss'
let client
export default {
  name: 'YdUpload',
  props: {
    /** 是否禁用 */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 上传文件数量限制 */
    maxlength: {
      type: Number,
      default: 9,
    },
    /** 上传文件的大小限制kb */
    maxSize: {
      type: Number,
      default: 200,
    },
    /** 上传文件类型 */
    fileType: {
      type: [Array, String],
      default() {
        return ['png', 'jpg', 'jpeg']
      },
    },
    /** 上传到Bucket中的文件夹名称 */
    dir: {
      type: String,
      default: 'default',
    },
    /** 上传到dir下的文件名 */
    fileName: {
      type: String,
      default: undefined,
    },
    /** 默认资源列表 */
    fileList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  methods: {
    /** 检测文件类型 */
    checkType(types) {
      if (typeof this.fileType === 'string') {
        return types.indexOf(this.fileType) >= 0
      }
      for (let i = 0, length = this.fileType.length; i < length; i++) {
        const el = this.fileType[i]
        if (types.indexOf(el) == -1) {
          return false
        }
      }
      return true
    },

    isImg() {
      let types = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
      return this.checkType(types)
    },

    isAudio() {
      const types = ['wav', 'mp3']
      return this.checkType(types)
    },

    isVideo() {
      const types = ['mp4']
      return this.checkType(types)
    },

    /** 获取阿里云OSS sts */
    getAliOss() {
      // 获取临时凭证
      client = new OSS({
        region: '你的region',
        accessKeyId: '你的accessKeyId',
        accessKeySecret: '你的accessKeySecret',
        bucket: '你的bucket',
      })
    },

    /** 校验文件 */
    validate(file) {
      const { size, name } = file
      if (size / 1024 > this.maxSize.value) {
        console.log(`上传文件的大小限制在${this.maxSize}KB内`)
        return false
      }
      if (this.fileType !== '*' && this.fileType.indexOf(name.split('.')[1]) < 0) {
        console.log(`只支持上传${this.fileType.toString()}格式的文件`)
        return false
      }
      return true
    },

    /** 上传文件到服务器 */
    upload(file) {
      try {
        const nameList = file.name.split('.')
        const ext = nameList[nameList.length - 1]
        const _fileName = `${this.dir}/${
          this.fileName ?? Date.now() + Number.parseInt(Math.random() * 10000 + '')
        }.${ext}`
        client
          .multipartUpload(_fileName, file, {
            progress: (p) => {
              // 获取上传进度。
              console.log(p * 100)
            },
          })
          .then((r) => {
            if (r.res.status == 200) {
              const img = `https://xxx.com/${_fileName}`
              this.fileList.push(img)
              this.$emit('input', this.fileList)
            } else {
              // 上传失败
              this.getAliOss()
            }
          })
      } catch (error) {
        console.log(error)
        // 上传失败
        this.getAliOss()
      }
    },

    onFileChange(e) {
      const inputFiles = e.target.files
      for (const file of inputFiles) {
        const valid = this.validate(file)
        if (valid) {
          this.upload(file)
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../css/upload.less';
</style>
