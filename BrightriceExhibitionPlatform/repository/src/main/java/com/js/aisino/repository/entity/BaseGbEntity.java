package com.js.aisino.repository.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * @Author Nicolas
 * @create 2021/3/17 0017 下午 3:33
 */
public class BaseGbEntity implements Serializable {
    private String czbz;

    private String zhgxsj;

    private String batchid;

    private String s_kqdm;

    private Date updatetime;

    private Date createtime;

    private Integer checked;

    private Integer uploadStatus;

    private Date lastUploadTime;

    private static final long serialVersionUID = 1L;

    public String getCzbz() {
        return czbz;
    }

    public void setCzbz(String czbz) {
        this.czbz = czbz;
    }

    public String getZhgxsj() {
        return zhgxsj;
    }

    public void setZhgxsj(String zhgxsj) {
        this.zhgxsj = zhgxsj;
    }

    public String getBatchid() {
        return batchid;
    }

    public void setBatchid(String batchid) {
        this.batchid = batchid;
    }

    public String getS_kqdm() {
        return s_kqdm;
    }

    public void setS_kqdm(String s_kqdm) {
        this.s_kqdm = s_kqdm;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    public Integer getChecked() {
        return checked;
    }

    public void setChecked(Integer checked) {
        this.checked = checked;
    }

    public Integer getUploadStatus() {
        return uploadStatus;
    }

    public void setUploadStatus(Integer uploadStatus) {
        this.uploadStatus = uploadStatus;
    }

    public Date getLastUploadTime() {
        return lastUploadTime;
    }

    public void setLastUploadTime(Date lastUploadTime) {
        this.lastUploadTime = lastUploadTime;
    }

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date beginTime;

    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date endTime;

    private Integer limit;

    private Integer start;

    private String errorcolumn;

    private String msg;

    public Date getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(Date beginTime) {
        this.beginTime = beginTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public String getErrorcolumn() {
        return errorcolumn;
    }

    public void setErrorcolumn(String errorcolumn) {
        this.errorcolumn = errorcolumn;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
