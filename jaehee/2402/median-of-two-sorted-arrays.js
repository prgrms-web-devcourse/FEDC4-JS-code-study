/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}-
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const target = Math.floor((nums1.length + nums2.length) / 2);
  const includePrev = (nums1.length + nums2.length) % 2 === 0;

  let start = 0;
  let end = nums2.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const midVal = nums2[mid];

    let localStart = 0;
    let localEnd = nums1.length - 1;
    let localMid = 0;
    while (localStart <= localEnd) {
      localMid = Math.floor((localStart + localEnd) / 2);

      if (midVal < nums1[localMid]) {
        localEnd = localMid - 1;
      } else {
        localStart = localMid + 1;
      }
    }
    console.log(mid, localMid, target);
    if (mid + localMid === target) {
      return includePrev
        ? (nums2[mid] +
            Math.max(nums1[mid - 1] ?? 0, nums1[localMid - 1] ?? 0)) /
            2
        : nums2[mid];
    }
    if (mid + localMid < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  start = 0;
  end = nums1.length;
  mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const midVal = nums1[mid];

    let localStart = 0;
    let localEnd = nums2.length - 1;
    let localMid = 0;
    while (localStart <= localEnd) {
      localMid = Math.floor((localStart + localEnd) / 2);

      if (midVal < nums2[localMid]) {
        localEnd = localMid - 1;
      } else {
        localStart = localMid + 1;
      }
    }
    console.log(mid, localMid, target);
    if (mid + localMid === target) {
      return includePrev
        ? (nums1[mid] +
            Math.max(nums2[mid - 1] ?? 0, nums2[localMid - 1] ?? 0)) /
            2
        : nums1[mid];
    }
    if (mid + localMid < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
