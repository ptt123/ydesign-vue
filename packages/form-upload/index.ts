import _UploadImg from './upload-img'
import _UploadAudio from './upload-audio'
import _UploadFile from './upload-file'
import _UploadVideo from './upload-video'
import withInstall from '../utils/withInstall'

export const FormUploadImg = withInstall(_UploadImg)
export const FormUploadAudio = withInstall(_UploadAudio)
export const FormUploadFile = withInstall(_UploadFile)
export const FormUploadVideo = withInstall(_UploadVideo)

export default FormUploadImg
