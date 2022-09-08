// -----数据处理----- //
import { wait } from "./else";

/**
 * 获取随机数
 * @param min 最小
 * @param max 最大
 * @returns 结果
 */
export function getRandom(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 秒钟转00:00
 * @param time 时间戳
 * @returns xx:xx
 */
export function sToMs(value: number) {
  const a = Math.floor((value / 60) % 60);
  const b = Math.floor(value / 3600);
  const c = Math.floor(value % 60);
  let h = b < 10 ? "0" + b : b;
  let m = a < 10 ? "0" + a : a;
  let s = c < 10 ? "0" + c : c;
  return h === "00" ? `${m}:${s}` : `${h}:${m}:${s}`;
}

/**
 * 00:00.0转秒钟
 * @param time 00:00.0格式的时间
 * @returns 秒钟
 */
export function timeToS(time: string) {
  const [a, b] = time.split(":");
  return Number(a) * 60 + Number(b);
}

/**
 * 数字大小限制
 * @param num 传入数字
 * @param min 最小值
 * @param max 最大值
 * @returns 区间内的值
 */
export function numLimit(num: number, min = 0, max = 100) {
  return Math.max(min, Math.min(num, max));
}

/**
 * 获取指定内容在数组最后一次出现的下标
 * @param arr 数组
 * @param callback 回调，携带 当前遍历内容 当前遍历下标，需返回符合条件
 * @returns 结果下标，找不到为 -1
 */
export function findLastIndex<T>(
  arr: T[],
  callback: (cur: T, index: number) => boolean
) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) index = i;
  }
  return index;
}

/**
 * 基于JSON的深拷贝
 * @param obj 被拷贝对象
 * @returns 新对象
 */
export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 复杂深拷贝
 * @param org
 * @param cache
 * @returns
 */
export function complexDeepCopy<T>(org: any, cache = new WeakMap()): T {
  return cache.has(org)
    ? cache.get(org)
    : Object.entries(org).reduce(
        (total, [k, v]) => {
          total[k] = typeof v === "object" ? complexDeepCopy(v, cache) : v;
          cache.set(org, total);
          return total;
        },
        org instanceof Array ? [] : ({} as any)
      );
}

/**
 * 数组均分
 * @param arr
 * @param size 每项长度
 * @returns
 */
export function arrAvgSplit<T>(arr: Array<T>, size: number) {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 数组位置交换
 * @param arr
 * @param aIndex
 * @param bIndex
 */
export function arrChildSwap<T>(arr: T[], aIndex: number, bIndex: number) {
  const [a, b] = [arr[aIndex], arr[bIndex]];
  arr.splice(aIndex, 1, b);
  arr.splice(bIndex, 1, a);
}

/**
 * 数据转树 todo类型完善
 * @param data
 * @param rootCallback
 * @returns
 */
export function arrayToTree<
  T extends {
    id: number | string;
    pid: number | string;
  }
>(data: T[], rootCallback: (item: T) => boolean) {
  const result: any[] = []; // 存放结果集
  const itemMap: any = {}; //
  for (const item of data) {
    const id = item.id;
    const pid = item.pid;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]["children"],
    };

    const treeItem = itemMap[id];

    if (rootCallback(item)) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

/**
 * json转对象
 * @param val
 * @param df 失败时的默认值
 * @returns
 */
export function jsonParse<T, V = T>(val: string | null | undefined, df: V) {
  try {
    return JSON.parse(val!) as T;
  } catch (e) {
    return df;
  }
}

/**
 * 延时递归获取指定信息
 * @param callback 回调，返回要获取的数据
 * @param count 尝试次数
 * @param curCount 当前次数，不建议传入此参数
 * @returns
 */
export async function getEl<T>(
  callback: () => T,
  count = 10,
  curCount = 0
): Promise<null | T> {
  await wait(800);
  const data = await callback();
  curCount++;
  return data || curCount > count ? data : getEl(callback, count, curCount);
}

/**
 * 取值
 * @param fn 回调
 * @param df 默认值
 * @returns
 */
export function getVal<T, A>(fn: () => T, df: A): T | A {
  try {
    const res = fn();
    if (!res) {
      throw new Error();
    }
    return res;
  } catch (e) {
    return df;
  }
}
