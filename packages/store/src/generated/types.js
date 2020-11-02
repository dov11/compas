// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

// An export soo all things work correctly with linters, ts, ...
export const __generated__ = true;
/**
 * @name StoreFile
 * @typedef {{"bucketName": string, "contentLength": number, "contentType": string, "name": string, "meta": StoreFileMeta, "id": string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileMeta
 * User definable, optional object to store whatever you want
 * @typedef {{}}
 */
/**
 * @name StoreFileGroup
 * @typedef {{"name"?: string, "order": number, "meta": StoreFileGroupMeta, "id": string, "file"?: string, "parent"?: string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupMeta
 * User definable, optional object to store whatever you want
 * @typedef {StoreFileMeta}
 */
/**
 * @name StoreFileGroupView
 * @typedef {{"name"?: string, "order": number, "meta": StoreFileGroupMeta, "isDirectory": boolean, "id": string, "file"?: string, "parent"?: string, "createdAt": Date, "updatedAt": Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreJob
 * @typedef {{"id": number, "isComplete": boolean, "priority": number, "scheduledAt": Date, "name": string, "data": *, "createdAt": Date, "updatedAt": Date, }}
 */
/**
 * @name StoreJobInterval
 * @typedef {{"years"?: number, "months"?: number, "days"?: number, "hours"?: number, "minutes"?: number, "seconds"?: number, }}
 */
/**
 * @name StoreSession
 * @typedef {{"expires": Date, "data": *, "id": string, "createdAt": Date, "updatedAt": Date, }}
 */
/**
 * @name StoreFileWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[], "idNotIn"?: (string)[], "idLike"?: string, "idNotLike"?: string, "bucketName"?: string, "bucketNameNotEqual"?: string, "bucketNameIn"?: (string)[], "bucketNameNotIn"?: (string)[], "bucketNameLike"?: string, "bucketNameNotLike"?: string, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[], "createdAtNotIn"?: (Date)[], "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[], "updatedAtNotIn"?: (Date)[], "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[], "deletedAtNotIn"?: (Date)[], "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreFileGroupWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[], "idNotIn"?: (string)[], "idLike"?: string, "idNotLike"?: string, "file"?: string, "fileNotEqual"?: string, "fileIn"?: (string)[], "fileNotIn"?: (string)[], "fileLike"?: string, "fileNotLike"?: string, "fileIsNull"?: boolean, "fileIsNotNull"?: boolean, "parent"?: string, "parentNotEqual"?: string, "parentIn"?: (string)[], "parentNotIn"?: (string)[], "parentLike"?: string, "parentNotLike"?: string, "parentIsNull"?: boolean, "parentIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[], "createdAtNotIn"?: (Date)[], "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[], "updatedAtNotIn"?: (Date)[], "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[], "deletedAtNotIn"?: (Date)[], "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreFileGroupViewWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[], "idNotIn"?: (string)[], "idLike"?: string, "idNotLike"?: string, "isDirectory"?: boolean, "file"?: string, "fileNotEqual"?: string, "fileIn"?: (string)[], "fileNotIn"?: (string)[], "fileLike"?: string, "fileNotLike"?: string, "fileIsNull"?: boolean, "fileIsNotNull"?: boolean, "parent"?: string, "parentNotEqual"?: string, "parentIn"?: (string)[], "parentNotIn"?: (string)[], "parentLike"?: string, "parentNotLike"?: string, "parentIsNull"?: boolean, "parentIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[], "createdAtNotIn"?: (Date)[], "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[], "updatedAtNotIn"?: (Date)[], "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, "deletedAt"?: Date, "deletedAtNotEqual"?: Date, "deletedAtIn"?: (Date)[], "deletedAtNotIn"?: (Date)[], "deletedAtGreaterThan"?: Date, "deletedAtLowerThan"?: Date, "deletedAtIncludeNotNull"?: boolean, }}
 */
/**
 * @name StoreJobWhere
 * @typedef {{"id"?: number, "idNotEqual"?: number, "idIn"?: (number)[], "idNotIn"?: (number)[], "idGreaterThan"?: number, "idLowerThan"?: number, "isComplete"?: boolean, "isCompleteIsNull"?: boolean, "isCompleteIsNotNull"?: boolean, "name"?: string, "nameNotEqual"?: string, "nameIn"?: (string)[], "nameNotIn"?: (string)[], "nameLike"?: string, "nameNotLike"?: string, "scheduledAt"?: Date, "scheduledAtNotEqual"?: Date, "scheduledAtIn"?: (Date)[], "scheduledAtNotIn"?: (Date)[], "scheduledAtGreaterThan"?: Date, "scheduledAtLowerThan"?: Date, "scheduledAtIsNull"?: boolean, "scheduledAtIsNotNull"?: boolean, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[], "createdAtNotIn"?: (Date)[], "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[], "updatedAtNotIn"?: (Date)[], "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, }}
 */
/**
 * @name StoreSessionWhere
 * @typedef {{"id"?: string, "idNotEqual"?: string, "idIn"?: (string)[], "idNotIn"?: (string)[], "idLike"?: string, "idNotLike"?: string, "expires"?: Date, "expiresNotEqual"?: Date, "expiresIn"?: (Date)[], "expiresNotIn"?: (Date)[], "expiresGreaterThan"?: Date, "expiresLowerThan"?: Date, "createdAt"?: Date, "createdAtNotEqual"?: Date, "createdAtIn"?: (Date)[], "createdAtNotIn"?: (Date)[], "createdAtGreaterThan"?: Date, "createdAtLowerThan"?: Date, "createdAtIsNull"?: boolean, "createdAtIsNotNull"?: boolean, "updatedAt"?: Date, "updatedAtNotEqual"?: Date, "updatedAtIn"?: (Date)[], "updatedAtNotIn"?: (Date)[], "updatedAtGreaterThan"?: Date, "updatedAtLowerThan"?: Date, "updatedAtIsNull"?: boolean, "updatedAtIsNotNull"?: boolean, }}
 */
/**
 * @name StoreFileInsertPartial
 * @typedef {{"id"?: string, "contentLength": number, "bucketName": string, "contentType": string, "name": string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileUpdatePartial
 * @typedef {{"contentLength"?: number, "bucketName"?: string, "contentType"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupInsertPartial
 * @typedef {{"id"?: string, "order"?: number, "file"?: string, "parent"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreFileGroupUpdatePartial
 * @typedef {{"order"?: number, "file"?: string, "parent"?: string, "name"?: string, "meta"?: {}, "createdAt"?: Date, "updatedAt"?: Date, "deletedAt"?: Date, }}
 */
/**
 * @name StoreJobInsertPartial
 * @typedef {{"id"?: number, "isComplete"?: boolean, "priority"?: number, "name": string, "scheduledAt"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreJobUpdatePartial
 * @typedef {{"isComplete"?: boolean, "priority"?: number, "name"?: string, "scheduledAt"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreSessionInsertPartial
 * @typedef {{"id"?: string, "expires": Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
/**
 * @name StoreSessionUpdatePartial
 * @typedef {{"expires"?: Date, "data"?: *, "createdAt"?: Date, "updatedAt"?: Date, }}
 */
