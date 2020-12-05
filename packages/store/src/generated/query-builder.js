// Generated by @compas/code-gen
/* eslint-disable no-unused-vars */

import { isNil, isPlainObject } from "@compas/stdlib";
import { query } from "@compas/store";
import {
  fileGroupOrderBy,
  fileGroupViewOrderBy,
  fileGroupViewWhere,
  fileGroupWhere,
  fileOrderBy,
  fileWhere,
  jobOrderBy,
  jobWhere,
  sessionOrderBy,
  sessionWhere,
} from "./query-partials.js";
import {
  validateStoreFileGroupQueryBuilder,
  validateStoreFileGroupViewQueryBuilder,
  validateStoreFileQueryBuilder,
  validateStoreJobQueryBuilder,
  validateStoreSessionQueryBuilder,
} from "./validators.js";
/**
 * @param {StoreFileQueryBuilder|StoreFileQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
function internalQueryFile(builder = {}, wherePartial) {
  const joinQb = query``;
  if (builder.viaGroup) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaGroup.offset)
      ? query`OFFSET ${builder.viaGroup.offset}`
      : query``;
    if (!isNil(builder.viaGroup.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaGroup.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fg."file"
${internalQueryFileGroup(builder.viaGroup)}
${offsetLimitQb}
`;
  }
  if (builder.viaGroupView) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaGroupView.offset)
      ? query`OFFSET ${builder.viaGroupView.offset}`
      : query``;
    if (!isNil(builder.viaGroupView.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaGroupView.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fgv."file"
${internalQueryFileGroupView(builder.viaGroupView)}
${offsetLimitQb}
`;
  }
  if (builder.group) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.group.offset)
      ? query`OFFSET ${builder.group.offset}`
      : query``;
    if (!isNil(builder.group.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.group.limit} ROWS ONLY`);
    }
    if (builder.group.file) {
      joinedKeys.push(
        `'${builder.group.file?.as ?? "file"}'`,
        '"ljl_2"."result"',
      );
    }
    if (builder.group.parent) {
      joinedKeys.push(
        `'${builder.group.parent?.as ?? "parent"}'`,
        '"ljl_3"."result"',
      );
    }
    if (builder.group.children) {
      joinedKeys.push(
        `'${builder.group.children?.as ?? "children"}'`,
        '"ljl_4"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fg.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroup(builder.group, query`AND fg."file" = f."id"`)}
ORDER BY ${fileGroupOrderBy()}
${offsetLimitQb}
) as "ljl_0" ON TRUE`);
  }
  if (builder.groupView) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.groupView.offset)
      ? query`OFFSET ${builder.groupView.offset}`
      : query``;
    if (!isNil(builder.groupView.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.groupView.limit} ROWS ONLY`,
      );
    }
    if (builder.groupView.file) {
      joinedKeys.push(
        `'${builder.groupView.file?.as ?? "file"}'`,
        '"ljl_5"."result"',
      );
    }
    if (builder.groupView.parent) {
      joinedKeys.push(
        `'${builder.groupView.parent?.as ?? "parent"}'`,
        '"ljl_6"."result"',
      );
    }
    if (builder.groupView.children) {
      joinedKeys.push(
        `'${builder.groupView.children?.as ?? "children"}'`,
        '"ljl_7"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fgv.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroupView(builder.groupView, query`AND fgv."file" = f."id"`)}
ORDER BY ${fileGroupViewOrderBy()}
${offsetLimitQb}
) as "ljl_1" ON TRUE`);
  }
  return query`
FROM "file" f
${joinQb}
WHERE ${fileWhere(builder.where, "f.", { skipValidator: true })} ${wherePartial}
`;
}
/**
 * Query Builder for file
 * Note that nested limit and offset don't work yet.
 * @param {StoreFileQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<*[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function queryFile(builder = {}) {
  const joinedKeys = [];
  validateStoreFileQueryBuilder(builder);
  if (builder.group) {
    joinedKeys.push(`'${builder.group?.as ?? "group"}'`, '"ljl_0"."result"');
  }
  if (builder.groupView) {
    joinedKeys.push(
      `'${builder.groupView?.as ?? "groupView"}'`,
      '"ljl_1"."result"',
    );
  }
  const qb = query`
SELECT to_jsonb(f.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQueryFile(builder)}
ORDER BY ${fileOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformFile(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * @param {StoreFileGroupQueryBuilder|StoreFileGroupQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
function internalQueryFileGroup(builder = {}, wherePartial) {
  const joinQb = query``;
  if (builder.viaFile) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaFile.offset)
      ? query`OFFSET ${builder.viaFile.offset}`
      : query``;
    if (!isNil(builder.viaFile.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaFile.limit} ROWS ONLY`,
      );
    }
    builder.where.fileIn = query`
SELECT DISTINCT f."id"
${internalQueryFile(builder.viaFile)}
${offsetLimitQb}
`;
  }
  if (builder.viaParent) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaParent.offset)
      ? query`OFFSET ${builder.viaParent.offset}`
      : query``;
    if (!isNil(builder.viaParent.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaParent.limit} ROWS ONLY`,
      );
    }
    builder.where.parentIn = query`
SELECT DISTINCT fg."id"
${internalQueryFileGroup(builder.viaParent)}
${offsetLimitQb}
`;
  }
  if (builder.viaChildren) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaChildren.offset)
      ? query`OFFSET ${builder.viaChildren.offset}`
      : query``;
    if (!isNil(builder.viaChildren.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaChildren.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fg."parent"
${internalQueryFileGroup(builder.viaChildren)}
${offsetLimitQb}
`;
  }
  if (builder.file) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.file.offset)
      ? query`OFFSET ${builder.file.offset}`
      : query``;
    if (!isNil(builder.file.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.file.limit} ROWS ONLY`);
    }
    if (builder.file.group) {
      joinedKeys.push(
        `'${builder.file.group?.as ?? "group"}'`,
        '"ljl_0"."result"',
      );
    }
    if (builder.file.groupView) {
      joinedKeys.push(
        `'${builder.file.groupView?.as ?? "groupView"}'`,
        '"ljl_1"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(f.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFile(builder.file, query`AND f."id" = fg."file"`)}
ORDER BY ${fileOrderBy()}
${offsetLimitQb}
) as "ljl_2" ON TRUE`);
  }
  if (builder.parent) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.parent.offset)
      ? query`OFFSET ${builder.parent.offset}`
      : query``;
    if (!isNil(builder.parent.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.parent.limit} ROWS ONLY`);
    }
    if (builder.parent.file) {
      joinedKeys.push(
        `'${builder.parent.file?.as ?? "file"}'`,
        '"ljl_2"."result"',
      );
    }
    if (builder.parent.parent) {
      joinedKeys.push(
        `'${builder.parent.parent?.as ?? "parent"}'`,
        '"ljl_3"."result"',
      );
    }
    if (builder.parent.children) {
      joinedKeys.push(
        `'${builder.parent.children?.as ?? "children"}'`,
        '"ljl_4"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fg.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroup(builder.parent, query`AND fg."id" = fg."parent"`)}
ORDER BY ${fileGroupOrderBy()}
${offsetLimitQb}
) as "ljl_3" ON TRUE`);
  }
  if (builder.children) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.children.offset)
      ? query`OFFSET ${builder.children.offset}`
      : query``;
    if (!isNil(builder.children.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.children.limit} ROWS ONLY`,
      );
    }
    if (builder.children.file) {
      joinedKeys.push(
        `'${builder.children.file?.as ?? "file"}'`,
        '"ljl_2"."result"',
      );
    }
    if (builder.children.parent) {
      joinedKeys.push(
        `'${builder.children.parent?.as ?? "parent"}'`,
        '"ljl_3"."result"',
      );
    }
    if (builder.children.children) {
      joinedKeys.push(
        `'${builder.children.children?.as ?? "children"}'`,
        '"ljl_4"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT array_remove(array_agg(to_jsonb(fg.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) ORDER BY ${fileGroupOrderBy()}), NULL) as "result"
${internalQueryFileGroup(builder.children, query`AND fg."parent" = fg."id"`)}
GROUP BY fg."id"
ORDER BY fg."id"
${offsetLimitQb}
) as "ljl_4" ON TRUE`);
  }
  return query`
FROM "fileGroup" fg
${joinQb}
WHERE ${fileGroupWhere(builder.where, "fg.", {
    skipValidator: true,
  })} ${wherePartial}
`;
}
/**
 * Query Builder for fileGroup
 * Note that nested limit and offset don't work yet.
 * @param {StoreFileGroupQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<*[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function queryFileGroup(builder = {}) {
  const joinedKeys = [];
  validateStoreFileGroupQueryBuilder(builder);
  if (builder.file) {
    joinedKeys.push(`'${builder.file?.as ?? "file"}'`, '"ljl_2"."result"');
  }
  if (builder.parent) {
    joinedKeys.push(`'${builder.parent?.as ?? "parent"}'`, '"ljl_3"."result"');
  }
  if (builder.children) {
    joinedKeys.push(
      `'${builder.children?.as ?? "children"}'`,
      '"ljl_4"."result"',
    );
  }
  const qb = query`
SELECT to_jsonb(fg.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQueryFileGroup(builder)}
ORDER BY ${fileGroupOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformFileGroup(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * @param {StoreFileGroupViewQueryBuilder|StoreFileGroupViewQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
function internalQueryFileGroupView(builder = {}, wherePartial) {
  const joinQb = query``;
  if (builder.viaFile) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaFile.offset)
      ? query`OFFSET ${builder.viaFile.offset}`
      : query``;
    if (!isNil(builder.viaFile.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaFile.limit} ROWS ONLY`,
      );
    }
    builder.where.fileIn = query`
SELECT DISTINCT f."id"
${internalQueryFile(builder.viaFile)}
${offsetLimitQb}
`;
  }
  if (builder.viaParent) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaParent.offset)
      ? query`OFFSET ${builder.viaParent.offset}`
      : query``;
    if (!isNil(builder.viaParent.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaParent.limit} ROWS ONLY`,
      );
    }
    builder.where.parentIn = query`
SELECT DISTINCT fgv."id"
${internalQueryFileGroupView(builder.viaParent)}
${offsetLimitQb}
`;
  }
  if (builder.viaChildren) {
    builder.where = builder.where ?? {};
    const offsetLimitQb = !isNil(builder.viaChildren.offset)
      ? query`OFFSET ${builder.viaChildren.offset}`
      : query``;
    if (!isNil(builder.viaChildren.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.viaChildren.limit} ROWS ONLY`,
      );
    }
    builder.where.idIn = query`
SELECT DISTINCT fgv."parent"
${internalQueryFileGroupView(builder.viaChildren)}
${offsetLimitQb}
`;
  }
  if (builder.file) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.file.offset)
      ? query`OFFSET ${builder.file.offset}`
      : query``;
    if (!isNil(builder.file.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.file.limit} ROWS ONLY`);
    }
    if (builder.file.group) {
      joinedKeys.push(
        `'${builder.file.group?.as ?? "group"}'`,
        '"ljl_0"."result"',
      );
    }
    if (builder.file.groupView) {
      joinedKeys.push(
        `'${builder.file.groupView?.as ?? "groupView"}'`,
        '"ljl_1"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(f.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFile(builder.file, query`AND f."id" = fgv."file"`)}
ORDER BY ${fileOrderBy()}
${offsetLimitQb}
) as "ljl_5" ON TRUE`);
  }
  if (builder.parent) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.parent.offset)
      ? query`OFFSET ${builder.parent.offset}`
      : query``;
    if (!isNil(builder.parent.limit)) {
      offsetLimitQb.append(query`FETCH NEXT ${builder.parent.limit} ROWS ONLY`);
    }
    if (builder.parent.file) {
      joinedKeys.push(
        `'${builder.parent.file?.as ?? "file"}'`,
        '"ljl_5"."result"',
      );
    }
    if (builder.parent.parent) {
      joinedKeys.push(
        `'${builder.parent.parent?.as ?? "parent"}'`,
        '"ljl_6"."result"',
      );
    }
    if (builder.parent.children) {
      joinedKeys.push(
        `'${builder.parent.children?.as ?? "children"}'`,
        '"ljl_7"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT to_jsonb(fgv.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) as "result"
${internalQueryFileGroupView(
  builder.parent,
  query`AND fgv."id" = fgv."parent"`,
)}
ORDER BY ${fileGroupViewOrderBy()}
${offsetLimitQb}
) as "ljl_6" ON TRUE`);
  }
  if (builder.children) {
    const joinedKeys = [];
    const offsetLimitQb = !isNil(builder.children.offset)
      ? query`OFFSET ${builder.children.offset}`
      : query``;
    if (!isNil(builder.children.limit)) {
      offsetLimitQb.append(
        query`FETCH NEXT ${builder.children.limit} ROWS ONLY`,
      );
    }
    if (builder.children.file) {
      joinedKeys.push(
        `'${builder.children.file?.as ?? "file"}'`,
        '"ljl_5"."result"',
      );
    }
    if (builder.children.parent) {
      joinedKeys.push(
        `'${builder.children.parent?.as ?? "parent"}'`,
        '"ljl_6"."result"',
      );
    }
    if (builder.children.children) {
      joinedKeys.push(
        `'${builder.children.children?.as ?? "children"}'`,
        '"ljl_7"."result"',
      );
    }
    joinQb.append(query`LEFT JOIN LATERAL (
SELECT array_remove(array_agg(to_jsonb(fgv.*) || jsonb_build_object(${query([
      joinedKeys.join(","),
    ])}) ORDER BY ${fileGroupViewOrderBy()}), NULL) as "result"
${internalQueryFileGroupView(
  builder.children,
  query`AND fgv."parent" = fgv."id"`,
)}
GROUP BY fgv."id"
ORDER BY fgv."id"
${offsetLimitQb}
) as "ljl_7" ON TRUE`);
  }
  return query`
FROM "fileGroupView" fgv
${joinQb}
WHERE ${fileGroupViewWhere(builder.where, "fgv.", {
    skipValidator: true,
  })} ${wherePartial}
`;
}
/**
 * Query Builder for fileGroupView
 * Note that nested limit and offset don't work yet.
 * @param {StoreFileGroupViewQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<*[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function queryFileGroupView(builder = {}) {
  const joinedKeys = [];
  validateStoreFileGroupViewQueryBuilder(builder);
  if (builder.file) {
    joinedKeys.push(`'${builder.file?.as ?? "file"}'`, '"ljl_5"."result"');
  }
  if (builder.parent) {
    joinedKeys.push(`'${builder.parent?.as ?? "parent"}'`, '"ljl_6"."result"');
  }
  if (builder.children) {
    joinedKeys.push(
      `'${builder.children?.as ?? "children"}'`,
      '"ljl_7"."result"',
    );
  }
  const qb = query`
SELECT to_jsonb(fgv.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQueryFileGroupView(builder)}
ORDER BY ${fileGroupViewOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformFileGroupView(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * @param {StoreJobQueryBuilder|StoreJobQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
function internalQueryJob(builder = {}, wherePartial) {
  const joinQb = query``;
  return query`
FROM "job" j
${joinQb}
WHERE ${jobWhere(builder.where, "j.", { skipValidator: true })} ${wherePartial}
`;
}
/**
 * Query Builder for job
 * Note that nested limit and offset don't work yet.
 * @param {StoreJobQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<*[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function queryJob(builder = {}) {
  const joinedKeys = [];
  validateStoreJobQueryBuilder(builder);
  const qb = query`
SELECT to_jsonb(j.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQueryJob(builder)}
ORDER BY ${jobOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformJob(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * @param {StoreSessionQueryBuilder|StoreSessionQueryTraverser} [builder={}]
 * @param {QueryPart} wherePartial
 * @returns {QueryPart}
 */
function internalQuerySession(builder = {}, wherePartial) {
  const joinQb = query``;
  return query`
FROM "session" s
${joinQb}
WHERE ${sessionWhere(builder.where, "s.", {
    skipValidator: true,
  })} ${wherePartial}
`;
}
/**
 * Query Builder for session
 * Note that nested limit and offset don't work yet.
 * @param {StoreSessionQueryBuilder} [builder={}]
 * @returns {{
 *  exec: function(sql: Postgres): Promise<*[]>,
 *  execRaw: function(sql: Postgres): Promise<*[]>
 *  queryPart: QueryPart,
 * }}
 */
export function querySession(builder = {}) {
  const joinedKeys = [];
  validateStoreSessionQueryBuilder(builder);
  const qb = query`
SELECT to_jsonb(s.*) || jsonb_build_object(${query([
    joinedKeys.join(","),
  ])}) as "result"
${internalQuerySession(builder)}
ORDER BY ${sessionOrderBy()}
`;
  if (!isNil(builder.offset)) {
    qb.append(query`OFFSET ${builder.offset}`);
  }
  if (!isNil(builder.limit)) {
    qb.append(query`FETCH NEXT ${builder.limit} ROWS ONLY`);
  }
  return {
    execRaw: (sql) => qb.exec(sql),
    exec: (sql) => {
      return qb.exec(sql).then((result) => {
        transformSession(result, builder);
        return result;
      });
    },
    get queryPart() {
      return qb;
    },
  };
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'file' and its relations.
 * @param {*[]} values
 * @param {StoreFileQueryBuilder=} builder
 */
export function transformFile(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    value.deletedAt = value.deletedAt ?? undefined;
    if (typeof value.deletedAt === "string") {
      value.deletedAt = new Date(value.deletedAt);
    }
    value[builder.group?.as ?? "group"] =
      value[builder.group?.as ?? "group"] ?? undefined;
    if (isPlainObject(value[builder.group?.as ?? "group"])) {
      const arr = [value[builder.group?.as ?? "group"]];
      transformFileGroup(arr, builder.group);
      value[builder.group?.as ?? "group"] = arr[0];
    }
    value[builder.groupView?.as ?? "groupView"] =
      value[builder.groupView?.as ?? "groupView"] ?? undefined;
    if (isPlainObject(value[builder.groupView?.as ?? "groupView"])) {
      const arr = [value[builder.groupView?.as ?? "groupView"]];
      transformFileGroupView(arr, builder.groupView);
      value[builder.groupView?.as ?? "groupView"] = arr[0];
    }
  }
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'fileGroup' and its relations.
 * @param {*[]} values
 * @param {StoreFileGroupQueryBuilder=} builder
 */
export function transformFileGroup(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    value.name = value.name ?? undefined;
    value.file = value.file ?? undefined;
    value.parent = value.parent ?? undefined;
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    value.deletedAt = value.deletedAt ?? undefined;
    if (typeof value.deletedAt === "string") {
      value.deletedAt = new Date(value.deletedAt);
    }
    value[builder.file?.as ?? "file"] =
      value[builder.file?.as ?? "file"] ?? undefined;
    if (isPlainObject(value[builder.file?.as ?? "file"])) {
      const arr = [value[builder.file?.as ?? "file"]];
      transformFile(arr, builder.file);
      value[builder.file?.as ?? "file"] = arr[0];
    }
    value[builder.parent?.as ?? "parent"] =
      value[builder.parent?.as ?? "parent"] ?? undefined;
    if (isPlainObject(value[builder.parent?.as ?? "parent"])) {
      const arr = [value[builder.parent?.as ?? "parent"]];
      transformFileGroup(arr, builder.parent);
      value[builder.parent?.as ?? "parent"] = arr[0];
    }
    value[builder.children?.as ?? "children"] =
      value[builder.children?.as ?? "children"] ?? undefined;
    if (Array.isArray(value[builder.children?.as ?? "children"])) {
      transformFileGroup(
        value[builder.children?.as ?? "children"],
        builder.children,
      );
    }
  }
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'fileGroupView' and its relations.
 * @param {*[]} values
 * @param {StoreFileGroupViewQueryBuilder=} builder
 */
export function transformFileGroupView(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    value.name = value.name ?? undefined;
    value.file = value.file ?? undefined;
    value.parent = value.parent ?? undefined;
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
    value.deletedAt = value.deletedAt ?? undefined;
    if (typeof value.deletedAt === "string") {
      value.deletedAt = new Date(value.deletedAt);
    }
    value[builder.file?.as ?? "file"] =
      value[builder.file?.as ?? "file"] ?? undefined;
    if (isPlainObject(value[builder.file?.as ?? "file"])) {
      const arr = [value[builder.file?.as ?? "file"]];
      transformFile(arr, builder.file);
      value[builder.file?.as ?? "file"] = arr[0];
    }
    value[builder.parent?.as ?? "parent"] =
      value[builder.parent?.as ?? "parent"] ?? undefined;
    if (isPlainObject(value[builder.parent?.as ?? "parent"])) {
      const arr = [value[builder.parent?.as ?? "parent"]];
      transformFileGroupView(arr, builder.parent);
      value[builder.parent?.as ?? "parent"] = arr[0];
    }
    value[builder.children?.as ?? "children"] =
      value[builder.children?.as ?? "children"] ?? undefined;
    if (Array.isArray(value[builder.children?.as ?? "children"])) {
      transformFileGroupView(
        value[builder.children?.as ?? "children"],
        builder.children,
      );
    }
  }
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'job' and its relations.
 * @param {*[]} values
 * @param {StoreJobQueryBuilder=} builder
 */
export function transformJob(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (typeof value.scheduledAt === "string") {
      value.scheduledAt = new Date(value.scheduledAt);
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
  }
}
/**
 * NOTE: At the moment only intended for internal use by the generated queries!
 * Transform results from the query builder that adhere to the known structure
 * of 'session' and its relations.
 * @param {*[]} values
 * @param {StoreSessionQueryBuilder=} builder
 */
export function transformSession(values, builder = {}) {
  for (let i = 0; i < values.length; ++i) {
    let value = values[i];
    if (isPlainObject(value.result) && Object.keys(value).length === 1) {
      values[i] = value.result;
      value = value.result;
    }
    if (typeof value.expires === "string") {
      value.expires = new Date(value.expires);
    }
    if (typeof value.createdAt === "string") {
      value.createdAt = new Date(value.createdAt);
    }
    if (typeof value.updatedAt === "string") {
      value.updatedAt = new Date(value.updatedAt);
    }
  }
}
