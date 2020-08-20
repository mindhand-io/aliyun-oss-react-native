const noop = () => {};
const asyncNoop = () => Promise.resolve();

module.exports = {
  enableDevMode: noop,
  initWithPlainTextAccessKey: noop,
  initWithSigner: noop,
  initWithSecurityToken: noop,
  initWithServerSTS: noop,
  asyncAppendObject: asyncNoop,
  asyncUpload: asyncNoop,
  asyncResumableUpload: asyncNoop,
  initMultipartUpload: asyncNoop,
  multipartUpload: asyncNoop,
  listParts: asyncNoop,
  abortMultipartUpload: asyncNoop,
  asyncDownload: asyncNoop,
  asyncCreateBucket: asyncNoop,
  asyncGetBucketACL: asyncNoop,
  asyncListBuckets: asyncNoop,
  asyncDeleteBucket: asyncNoop,
  asyncHeadObject: asyncNoop,
  asyncListObjects: asyncNoop,
  doesObjectExist: asyncNoop,
  asyncCopyObject: asyncNoop,
  asyncDeleteObject: asyncNoop,
};
