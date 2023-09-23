(()=>{
    const $doc = document;
    const $tab = document.getElementById('js-tab')
    const $nav = $tab.querySelectorAll('[data-nav]')
    const $content = $tab.querySelectorAll('[data-content]')
    
    //初期化
    const init = ()=> {
        $content[0].style.display = 'block'
    }
    init();

    //クリックしたら起こるイベント
    const handleClick = (e)=> {
        e.preventDefault();
        
        //クリックされたnavとそのデータを取得する
        const $clikedItem = e.target;
        const targetVal = $clikedItem.dataset.nav;

        //対象外のnav,contentを全て初期化する
        let index = 0;
        while (index < $nav.length) {
            $content[index].style.display = 'none';
            $nav[index].classList.remove('is-active');
            index++;
        }

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block'
        $nav[targetVal].classList.add('is-active');
        

    };
    
    //いずれかのタブナビゲーションがクリックされたらイベントをトリガする
    let index = 0;
    while (index < $nav.length) {
        $nav[index].addEventListener('click', (e)=>handleClick(e));
        index++;
    }
    

})();