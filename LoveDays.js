/**
 * 恋爱天数统计工具
 *
 * @author 欧阳鹏
 * @blog https://apee.top
 * @github https://github.com/oyps/love-days
 */
var LoveDays = /** @class */ (function () {
    /**
     * 初始化
     * @param xiangShiDateTime 相识日期，格式：2022-11-22
     * @param guanXuanDateTime 官宣日期，格式：2022-12-03
     */
    function LoveDays(xiangShiDateTime, guanXuanDateTime) {
        this.xiangShiDateTime = xiangShiDateTime;
        this.guanXuanDateTime = guanXuanDateTime;
        var nowTimestamp = new Date().getTime();
        var xiangShiTimestamp = new Date(xiangShiDateTime).getTime();
        var guanxuanTimestamp = new Date(guanXuanDateTime).getTime();
        this.xiangShiDays = this.getDays(xiangShiTimestamp, nowTimestamp);
        this.guanXuanDays = this.getDays(guanxuanTimestamp, nowTimestamp);
    }
    /**
     * 计算两个时间戳之间的天数
     * @param startTimestamp 开始日期，时间戳
     * @param endTimestamp 结束日期，时间戳
     * @returns 相距的天数
     */
    LoveDays.prototype.getDays = function (startTimestamp, endTimestamp) {
        var timestamp = endTimestamp - startTimestamp;
        var days = timestamp / (1000 * 60 * 60 * 24);
        var daysLimit = (days * 1.0).toFixed(1);
        return daysLimit;
    };
    /**
     * 获取相识日期
     * @returns 相识日期，格式：2022-11-22
     */
    LoveDays.prototype.getXiangShiDate = function () {
        var date = new Date(this.xiangShiDateTime);
        return this.getDate(date);
    };
    /**
    * 获取官宣日期
    * @returns 相识日期，格式：2022-12-03
    */
    LoveDays.prototype.getGuanXuanDate = function () {
        var date = new Date(this.guanXuanDateTime);
        return this.getDate(date);
    };
    LoveDays.prototype.getDate = function (date) {
        return date.getFullYear() + '-'
            + this.getTwoNumber(date.getMonth()) + '-'
            + this.getTwoNumber(date.getDate());
    };
    LoveDays.prototype.getTwoNumber = function (number) {
        return (number < 10 ? '0' : '') + number;
    };
    /**
     * 获取已相识的天数
     * @returns 已相识的天数
     */
    LoveDays.prototype.getXiangShiDays = function () {
        return this.xiangShiDays;
    };
    /**
     * 获取已官宣的天数
     * @returns 已官宣的天数
     */
    LoveDays.prototype.getGuanXuanDays = function () {
        return this.guanXuanDays;
    };
    return LoveDays;
}());
