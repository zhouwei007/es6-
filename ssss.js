if( (this.compare('mobile','17319262607','==','userInfo')) && (this.compare('warrantId','123','==','warrantInfo')) && (this.compare('warrantNumber','10','==','warrantInfo')) )
{this.Behavior('hide','IDFlagLoanIDeee','')}

if((this.compare('mobile','17319262607','=='))&&this.compare('userName','周','==')){this.Behavior('setValue','houseArea','100')}

if((this.compare('mobile','17319262607','==','userInfo'))&&(this.compare('warrantNumber','100','==','warrantInfo'))){this.Behavior('setValue','warrantAssetsCode','zhouwei','warrantInfo')}


js1:
  loadUserCode('instorageInfo_instorageRecordRequestUser'); // 页面加载 调用方法 入库信息 入库人申请

$("#warrantInfo_archiveLoanId").val($("input[name='loanId']").val()); // 设置

$("#warrantInfo_add").click(function(){ // 给字段绑定事件，可以直接用设置值替代

  $("#table_warrantInfo_Warrant_tbody input[id='warrantInfo_archiveLoanId']").val($("input[name='loanId']").val());

});

$("#t_td_warrantAssetsCode_0").find('input[name=warrantInfo-warrantCode]').each(function(){ // 给字段绑定方法
  $(this).attr("onchange","checkWarrantRepeate($(this).val());")
});

function checkWarrantRepeate(value) { // warrantAssetsCode 档案识别号
  debugger;
  //var paramValue = $(this).val();
  $.ajax({
    type: "POST",
    url: ctx +"/check/checkWarrantDupValue",
    async: false,
    data: {'paramValue': value},
    dataType: "json",
    error: function (request) {
      alert("校验失败!");
    },
    success: function (data) {
      var flag = data.msg;
      if (data.status == "0") {
        if (flag == "true") { //有重复值不能提交
          //$("#msg").text("该参数值已经存在!");
          alert("权证识别号该参数值已经存在!")
        }
      }
    }
  });
}