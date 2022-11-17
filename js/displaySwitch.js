
//アイコン＆ヘッダーボタン
$(function(){
    $('.icon,.header').hide();

     $('.section').not($('.'+$(this).attr('id'))).hide();
     $('.buttonList').on('click',function(){
      // クリックした要素の ID と違うクラス名のセクションを非表示
      // クリックした要素の ID と同じクラスのセクションを表示
      $('.'+$(this).attr('id')).show();
      // toggle にすると、同じボタンを 2 回押すと非表示になる
      // $('.'+$(this).attr('id')).toggle();

      $('.file-label').not($('.'+$(this).attr('id'))).hide();
      // クリックした要素の ID と同じクラスのセクションを表示
      $('.'+$(this).attr('id')).show();

      $('.preview').not($('.'+$(this).attr('id'))).hide();
      // クリックした要素の ID と同じクラスのセクションを表示
      $('.'+$(this).attr('id')).show();

      $('.template').hide();
      $('.empty').show();
    });
    if(!'.header') {
        $('.header').hide();
    }
    
});
//ツールテンプレート
$(function(){
    $('.template').hide();

    $('.tool-group').on('click',function(){
      // クリックした要素の ID と違うクラス名のテンプレートを非表示
      $('.template').not($('.'+$(this).attr('id'))).hide();
      // クリックした要素の ID と同じクラスのテンプレートを表示
      $('.'+$(this).attr('id')).show();
      //空のテンプレートを非表示
      $('.empty').hide();
    });
});

//canvasにテンプレートを重ねる
$(function(){
  //クロップ後
  $('croppedCanvas').on('click',function(){

    });
});