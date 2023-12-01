export function getForeastText(index1, index2, product) {
  // 0 平稳、1 上涨、2 波动 3 下跌
  const texts = [
    [
      `基于本周${product}市场价格现状，涨跌幅度有限，预计下周${product}价格将会有小幅波动。`,
      `总体来说，本周${product}价格市场总体平稳，价格波动范围不大，预计下周${product}价格变化幅度有限。`,
      `本周${product}总体价格趋于平稳，预计下周${product}价格可能会有小幅波动。`,
      `基于本周监测${product}总体价格市场行情，预计下周${product}价格将继续保持平稳。`,
      `基于本周${product}价格市场整体平稳现状，预计下周${product}价格市场行情将保持稳定。`,
      `本周${product}价格市场平稳，预计下周${product}供需平衡，整体相对平稳。`,
      `本周${product}价格总体保持平稳，预计下周${product}价格波动幅度不会太大。`,
      `基于本周${product}价格波动较小，预计下周${product}总体市场情况稳定。`,
      `本周${product}价格全线稳定，预计下周${product}行情总体稳定。`,
      `基于本周${product}价格波动较小，预计下周${product}总体市场情况稳定。`,
      `本周${product}价格全线稳定，预计下周${product}行情总体稳定。`,
      `鉴于本周${product}价格的相对稳定，下周市场可能会保持相似的走势。`,
      `这周${product}价格波动较小，下周市场可能会保持平稳。`,
      `本周${product}价格基本维持稳定，预计下周市场情况也不会有大的变化。`,
      `基于本周监测${product}总体价格市场行情，预计后续柑橘价格将保持平稳。`,
    ],
    [
      `本周部分${product}价格有小幅波动，预计下周${product}价格市场将趋于平稳。`,
      `本周${product}价格市场显示小范围涨跌，预计下周${product}总体市场处于活跃态势。`,
      `通过监测本周${product}市场价格：部分${product}品种价格波动较大，预计下周部分${product}价格将有小幅波动。`,
      `本周${product}市场价格略有波动，但总体市场平稳；预计下周${product}价格将保持平稳。`,
      `通过监测本周鸡价市场价格，预计下周${product}价格可能会有小额涨跌趋势。`,
      `预计下周${product}品种持续供应，整体行情将保持稳定。`,
    ],
    [
      `本周部分${product}价格略有上涨，预计下周${product}价格变化不会太大。`,
      `通过监测本周${product}市场价格，预计下周${product}价格可能会呈现小幅涨跌现象。`,
      `这周${product}价格上升，下周市场可能会保持相对稳定。`,
      `经过本周的观察，${product}价格出现上升趋势，预计下周价格可能会继续上涨。`,
      `本周${product}市场价格有所上涨，下周可能会出现一些价格波动。`,
    ],
    [
      `鉴于本周${product}价格有小幅下跌，预计下周${product}价格将有一定的涨跌趋势。`,
      `预计下周${product}价格将有小幅下跌趋势，但市场总体行情稳定。`,
      `本周${product}价格出现了下跌趋势，预计下周${product}价格可能继续下跌。`,
      `鉴于本周${product}价格的下跌，下周${product}市场可能会继续受到影响。`,
      `尽管本周${product}价格下跌，但下周市场的不确定性使得${product}价格趋势难以预测。`,
      `本周${product}价格的下跌趋势可能会持续，${product}投资者需要保持警惕。`,
      `鉴于本周${product}价格出现下滑，下周${product}市场可能会继续不稳定。`,
    ],
  ];
  index2 = index2 % texts[index1].length;
  return texts[index1][index2];
}

function getWeekNumber(dateString) {
  const dateParts = dateString.split("-");
  if (dateParts.length === 3) {
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const dateObject = new Date(year, month, day);

    if (!isNaN(dateObject.getTime())) {
      const firstDayOfYear = new Date(year, 0, 1);
      const daysPassed = (dateObject - firstDayOfYear) / (24 * 60 * 60 * 1000);
      const weekNumber = Math.ceil((daysPassed + firstDayOfYear.getDay() + 1) / 7);

      return { weekNumber, year };
    }
  }

  return null;
}

export function weekDifference(startDate, endDate) {
  const startWeek = getWeekNumber(startDate);
  const endWeek = getWeekNumber(endDate);

  if (startWeek !== null && endWeek !== null) {
    const startYear = startWeek.year;
    const endYear = endWeek.year;

    const weeksDifference = (endYear - startYear) * 52 + endWeek.weekNumber - startWeek.weekNumber;
    return Math.abs(weeksDifference); // 返回差值的绝对值
  } else {
    return null; // 日期字符串无效
  }
}

// 示例用法
const startDateString = "2023-11-01";
const endDateString = "2023-12-15";

const weeksDifference = weekDifference(startDateString, endDateString);

if (weeksDifference !== null) {
  console.log("周差值:", weeksDifference);
} else {
  console.log("无效的日期字符串");
}
