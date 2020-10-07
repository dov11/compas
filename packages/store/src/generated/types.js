// Generated by @lbu/code-gen
/* eslint-disable no-unused-vars */

/**
 * @name StoreFile
 *
 * @typedef { { "id":string, "bucketName":string, "contentLength":number, "contentType":string, "name":string, "meta":StoreFileMeta, "createdAt":Date, "updatedAt":Date, "deletedAt"?:Date, }}
 */

/**
 * @name StoreFile_Input
 *
 * @typedef { { "id":string, "bucketName":string, "contentLength":number, "contentType":string, "name":string, "meta":StoreFileMeta_Input, "createdAt"?:string, "updatedAt"?:string, "deletedAt"?:string, }}
 */

/**
 * @name StoreFileInsertPartial
 *
 * @typedef { { "bucketName":string, "contentLength":number, "contentType":string, "name":string, "meta":StoreFileMeta, "createdAt":Date, "updatedAt":Date, "deletedAt"?:Date, }}
 */

/**
 * @name StoreFileInsertPartial_Input
 *
 * @typedef { { "bucketName":string, "contentLength":number, "contentType":string, "name":string, "meta":StoreFileMeta_Input, "createdAt"?:string, "updatedAt"?:string, "deletedAt"?:string, }}
 */

/**
 * @name StoreFileMeta
 *
 * @typedef { { }}
 */

/**
 * @name StoreFileMeta_Input
 *
 * @typedef { { } |undefined}
 */

/**
 * @name StoreFileWhere
 * Docs: By default 'where.deletedAtInclude' will only include 'null' values. To use the other generated variants like 'deletedAtGreaterThan', set this value to 'true'.
 * @typedef { { "id"?:string, "idIn"?:(string)[] , "bucketName"?:string , "bucketNameLike"?:string , "createdAt"?:Date, "createdAtGreaterThan"?:Date, "createdAtLowerThan"?:Date, "updatedAt"?:Date, "updatedAtGreaterThan"?:Date, "updatedAtLowerThan"?:Date, "deletedAtInclude"?:, "deletedAt"?:Date, "deletedAtGreaterThan"?:Date, "deletedAtLowerThan"?:Date, }}
 */

/**
 * @name StoreFileWhere_Input
 * Docs: By default 'where.deletedAtInclude' will only include 'null' values. To use the other generated variants like 'deletedAtGreaterThan', set this value to 'true'.
 * @typedef { { "id"?:string, "idIn"?:(string)[] , "bucketName"?:string , "bucketNameLike"?:string , "createdAt"?:string, "createdAtGreaterThan"?:string, "createdAtLowerThan"?:string, "updatedAt"?:string, "updatedAtGreaterThan"?:string, "updatedAtLowerThan"?:string, "deletedAtInclude"?:, "deletedAt"?:string, "deletedAtGreaterThan"?:string, "deletedAtLowerThan"?:string, }}
 */

/**
 * @name StoreJob
 *
 * @typedef { { "id":number, "isComplete":boolean, "priority":number, "scheduledAt":Date, "name":string, "data":*, "createdAt":Date, "updatedAt":Date, }}
 */

/**
 * @name StoreJob_Input
 *
 * @typedef { { "id":number, "isComplete"?:boolean , "priority"?:number , "scheduledAt"?:string, "name":string, "data"?:* , "createdAt"?:string, "updatedAt"?:string, }}
 */

/**
 * @name StoreJobInsertPartial
 *
 * @typedef { { "isComplete":boolean, "priority":number, "scheduledAt":Date, "name":string, "data":*, "createdAt":Date, "updatedAt":Date, }}
 */

/**
 * @name StoreJobInsertPartial_Input
 *
 * @typedef { { "isComplete"?:boolean , "priority"?:number , "scheduledAt"?:string, "name":string, "data"?:* , "createdAt"?:string, "updatedAt"?:string, }}
 */

/**
 * @name StoreJobWhere
 *
 * @typedef { { "id"?:number , "idGreaterThan"?:number , "idLowerThan"?:number , "scheduledAt"?:Date, "scheduledAtGreaterThan"?:Date, "scheduledAtLowerThan"?:Date, "name"?:string , "nameLike"?:string , "createdAt"?:Date, "createdAtGreaterThan"?:Date, "createdAtLowerThan"?:Date, "updatedAt"?:Date, "updatedAtGreaterThan"?:Date, "updatedAtLowerThan"?:Date, }}
 */

/**
 * @name StoreJobWhere_Input
 *
 * @typedef { { "id"?:number , "idGreaterThan"?:number , "idLowerThan"?:number , "scheduledAt"?:string, "scheduledAtGreaterThan"?:string, "scheduledAtLowerThan"?:string, "name"?:string , "nameLike"?:string , "createdAt"?:string, "createdAtGreaterThan"?:string, "createdAtLowerThan"?:string, "updatedAt"?:string, "updatedAtGreaterThan"?:string, "updatedAtLowerThan"?:string, }}
 */

/**
 * @name StoreSession
 *
 * @typedef { { "id":string, "expires":Date, "data":*, "createdAt":Date, "updatedAt":Date, }}
 */

/**
 * @name StoreSession_Input
 *
 * @typedef { { "id":string, "expires":string, "data"?:* , "createdAt"?:string, "updatedAt"?:string, }}
 */

/**
 * @name StoreSessionInsertPartial
 *
 * @typedef { { "expires":Date, "data":*, "createdAt":Date, "updatedAt":Date, }}
 */

/**
 * @name StoreSessionInsertPartial_Input
 *
 * @typedef { { "expires":string, "data"?:* , "createdAt"?:string, "updatedAt"?:string, }}
 */

/**
 * @name StoreSessionWhere
 *
 * @typedef { { "id"?:string, "idIn"?:(string)[] , "expires"?:Date, "expiresGreaterThan"?:Date, "expiresLowerThan"?:Date, "createdAt"?:Date, "createdAtGreaterThan"?:Date, "createdAtLowerThan"?:Date, "updatedAt"?:Date, "updatedAtGreaterThan"?:Date, "updatedAtLowerThan"?:Date, }}
 */

/**
 * @name StoreSessionWhere_Input
 *
 * @typedef { { "id"?:string, "idIn"?:(string)[] , "expires"?:string, "expiresGreaterThan"?:string, "expiresLowerThan"?:string, "createdAt"?:string, "createdAtGreaterThan"?:string, "createdAtLowerThan"?:string, "updatedAt"?:string, "updatedAtGreaterThan"?:string, "updatedAtLowerThan"?:string, }}
 */
