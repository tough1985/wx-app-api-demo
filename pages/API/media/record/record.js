var util = require('../../../../utils/util.js');
var interval, playInterval;
var data = {
  page: {
    title: 'record',
    desc: '录音。'
  },
  recording: false,
  hasRecord: false,
  playing: false,
  playTime: 0,
  recordTime: 0,
  formatedRecordTime: '00:00:00',
  formatedPlayTime: '00:00:00',
  tempFilePath: ''
}

Page({
    data,
    startRecord: function(e){
        this.setData({
            recording: true
        })

        var that = this;
        interval = setInterval(function(){
            that.data.recordTime += 1;
            that.setData({
                formatedRecordTime: util.formatTime(that.data.recordTime)
            })
        }, 1000);

       //貌似录音没用
        wx.startRecord({
            success: function(res){
                console.log('success');
                console.log(res)
                that.setData({
                    tempFilePath: res.tempFilePath
                })
            },
            complete: function(){
                console.log('complete');
                that.setData({
                    recording: false,
                    hasRecord: true
                })
                clearInterval(interval)
            }
        })
    },
    stopRecord: function(){
        wx.stopRecord();
        this.setData({
            recording: false,
            recordTime: 0,
            formatedRecordTime: '00:00:00',
            hasRecord: true
        });
        clearInterval(interval);
    },
    playVoice: function(){
        var that = this;
        this.setData({
            playing: true
        })
        playInterval = setInterval(function(){
            that.data.playTime += 1;
            that.setData({
                formatedPlayTime: util.formatTime(that.data.playTime)
            })
        }, 1000);

        wx.playVoice({
            filePath: that.data.tempFilePath,
            complete: function(){
                clearInterval(playInterval);
                that.data.playTime = 0;
                that.setData({
                    playing: false,
                    formatedPlayTime: util.formatTime(that.data.playTime)
                })
            }
        })
    },
    clear: function(){
        this.data.recordTime = 0;
        this.data.playTime = 0;
        this.setData({
            hasRecord: false,
            tempFilePath: '',
            formatedRecordTime: util.formatTime(this.data.recordTime),
            formatedPlayTime: util.formatTime(this.data.playTime)
        })
    },
    pauseVoice: function(){
        clearInterval(playInterval);
        wx.pauseVoice();
        this.setData({
            playing: false
        })
    },
    stopVoice: function(){
        clearInterval(playInterval);
        this.data.playTime = 0;
        this.setData({
            playing: false,
            formatedPlayTime: util.formatTime(this.data.playTime)
        })
        wx.stopVoice();
    }
});