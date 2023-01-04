import _UploadImg from './uploadImg.vue'
import _UploadVideo from './uploadVideo.vue'
import _UploadAudio from './uploadAudio.vue'
import _UploadFile from './uploadFile.vue'
import withInstall from '../utils/withInstall'

export const UploadImg = withInstall(_UploadImg)
export const UploadVideo = withInstall(_UploadVideo)
export const UploadAudio = withInstall(_UploadAudio)
export const UploadFile = withInstall(_UploadFile)

export default UploadImg
