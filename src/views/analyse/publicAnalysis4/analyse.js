export function getAnalyse(data, value1, value2) {
  //获取平均价格
  let sum = 0;
  data.forEach((item) => {
    sum += Number(item);
  });
  const avgPrice = Number(sum / data.length);
  //判断是否平稳
  if (isSmooth(data, avgPrice, value1)) {
    return "平稳";
  }
  //判断是否持续上涨
  if (isAllUp(data, value1)) {
    if (data[data.length - 1] - data[0] >= value2) {
      return "上涨";
    }
    if (data[data.length - 1] - data[0] >= value1) {
      return "小幅上涨";
    }
  }
  if (isAllDown(data, value1)) {
    if (data[0] - data[data.length - 1] >= value2) {
      return "下跌";
    }
    if (data[0] - data[data.length - 1] >= value1) {
      return "小幅下跌";
    }
  }
  //判断是否是大波动
  if (bigFluctuations(data, avgPrice, value2)) {
    return "波动";
  }
  return "小幅波动";
}

function isSmooth(data, avgPrice, value1) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] - avgPrice >= value1 || data[i] - avgPrice <= -value1) {
      return false;
    }
  }
  return true;
}

function isAllUp(data, value1) {
  //判断是否有超过一半的天数上涨，并且最后的价格比第一天大
  let count = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      count++;
    }
  }
  if (count > data.length / 2 && data[data.length - 1] > data[0]) {
    return true;
  }
  for (let i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1] && data[i - 1] - data[i] > value1 / 2) {
      return false;
    }
  }
  return true;
}

function isAllDown(data, value1) {
  //判断是否有超过一半的天数下跌，并且最后的价格比第一天小
  let count = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] < data[i - 1]) {
      count++;
    }
  }
  if (count > data.length / 2 && data[data.length - 1] < data[0]) {
    return true;
  }
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1] && data[i] - data[i - 1] > value1 / 2) {
      return false;
    }
  }
  return true;
}

function bigFluctuations(data, avgPrice, value2) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] - avgPrice >= value2 || data[i] - avgPrice <= -value2) {
      return true;
    }
  }
  return false;
}
export function getAnalyse2(data, value1) {
  //获取平均价格
  let sum = 0;
  data.forEach((item) => {
    sum += Number(item);
  });
  const avgPrice = Number(sum / data.length);
  if (isSmooth(data, avgPrice, value1)) {
    return "平稳";
  }
  if (isAllUp(data, value1)) {
    if (data[data.length - 1] - data[0] >= value1) {
      return "上涨" + (((data[data.length - 1] - data[0]) / data[0]) * 100).toFixed(2) + "%";
    }
  }
  if (isAllDown(data, value1)) {
    if (data[0] - data[data.length - 1] >= value1) {
      return "下跌" + (((data[0] - data[data.length - 1]) / data[0]) * 100).toFixed(2) + "%";
    }
  }
  return "波动";
}
