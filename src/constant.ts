// GIF 版本
enum GIF_VERSION {
  GIF87a = 'GIF87a',
  GIF89a = 'GIF89a'
}

// 扩展类型
enum EXTENSION_TYPE {
  graphics_control,
  plain_text,
  application,
  comment
}

// 头部字节长度
const HEADER_BYTE_LENGTH = 6

// 屏幕逻辑描述符字节长度
const LOGICAL_SCREEN_DESCRIPTOR_BYTE_LENGTH = 13

// 扩展标识
const EXTENSION_FLAG = 33

// 图像控制扩展标识
const GRAPHICS_CONTROL_EXTENSION_FLAG = 249

// 文本扩展标识
const PLAIN_TEXT_EXTENSION_FLAG = 1

// 应用扩展标识
const APPLICATION_EXTENSION_FLAG = 255

// 注释扩展标识
const COMMENT_EXTENSION_FLAG = 254

// 图像描述符标识
const IMAGE_DESCRIPTOR_FLAG = 44

// 图像描述符字节长度
const IMAGE_DESCRIPTOR_BYTE_LENGTH = 10

// 图像数据结束标识
const IMAGE_DATA_END_FLAG = 0

// 结束标识
const TRAILER_FLAG = 59

export {
  GIF_VERSION,
  EXTENSION_TYPE,
  EXTENSION_FLAG,
  HEADER_BYTE_LENGTH,
  LOGICAL_SCREEN_DESCRIPTOR_BYTE_LENGTH,
  GRAPHICS_CONTROL_EXTENSION_FLAG,
  PLAIN_TEXT_EXTENSION_FLAG,
  APPLICATION_EXTENSION_FLAG,
  COMMENT_EXTENSION_FLAG,
  IMAGE_DESCRIPTOR_FLAG,
  IMAGE_DESCRIPTOR_BYTE_LENGTH,
  IMAGE_DATA_END_FLAG,
  TRAILER_FLAG
}
