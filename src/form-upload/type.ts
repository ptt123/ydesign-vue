export interface YdFormUploadProps {
  uploadImgItem: FormItem & {
    type: 'upload-img'
  }
  uploadAudioItem: FormItem & {
    type: 'upload-audio'
  }
  uploadFileItem: FormItem & {
    type: 'upload-file'
  }
  uploadVideoItem: FormItem & {
    type: 'upload-video'
  }
}
