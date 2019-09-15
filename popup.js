document.addEventListener('DOMContentLoaded', function() {    
    loadProfileData();    

    function getStorageKey(key, success, failed)
    {
        chrome.storage.local.get([key], function(result) {            
            if(!!result[key])
            {
                success && success(result[key]);
            }
            else{
                failed && failed();
            }
        });  
    }

    function setStorageKey(key, value, cb)
    {
        var obj = {};
        obj[key] = value;
        chrome.storage.local.set(obj, function(result) {            
            cb && cb();
        });  
    }

    function hasProfile(success, failed)
    {        
        getStorageKey('profile_datetime', success, failed);        
    }

    function btnClicked(btn, success, failed){
       hasProfile(()=>{
        btn.classList.add('clicked');
        success && success();
       }, ()=>{
        //alert('Please setup your profile first.');        
        failed ? failed() : toggleWrapperDiv();
       });     
    }

    function toggleWrapperDiv()
    {
        document.getElementById('btnWrapper').classList.toggle('my-hide');
        document.getElementById('btnWrapper2').classList.toggle('my-hide');
    }

    document.getElementById('toggle').addEventListener('click', function(e) {
        ///btnClicked(e.target);
        toggleWrapperDiv();
    });
    

    function executeButtonScript(btn, stepNo, )
    {
        btnClicked(btn, ()=> {
            getStorageKey('profile', pro=>{
                chrome.tabs.executeScript( {
                    code:'var stProfile='+JSON.stringify(pro),                    
                }, chrome.tabs.executeScript( {                    
                    file: `js/step${stepNo}.js`
                }, chrome.tabs.executeScript( {
                    code:'var stProfile="";'                    
                })));
            });   
        });     
    }

    document.getElementById('step1').addEventListener('click', function(e) {        
        executeButtonScript(e.target, 1);        
    });

    document.getElementById('step2').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 2);
    });

    document.getElementById('step3').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 3);
    });

    document.getElementById('step4').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 4);
    });

    document.getElementById('step5').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 5);
    });

    document.getElementById('step6').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 6);
    });

    document.getElementById('step7').addEventListener('click', function(e) {    
        executeButtonScript(e.target, 7);
    });

    document.getElementById('clearProfile').addEventListener('click', function(e) {    
        chrome.storage.local.clear(()=>{            
            var error = chrome.runtime.lastError;            
            error && alert(error);
            loadProfileData();
        });        
    }); 
    
    document.getElementById('btnSaveProfile').addEventListener('click', function(e){

        chrome.storage.local.set({'profile_datetime':'value'}); 

        let users = [];
        for (let rw = 0; rw < 5; rw++) {
            let u = {};
            for (let col = 0; col < 6; col++) {
                let field = `c${col+1}${rw+1}`;
                u[field] = document.getElementById(field).value;
            }
            users.push(u);
        }
        setStorageKey('profile', {
            userName: document.getElementById('userName').value,
            userPassword: document.getElementById('userPassword').value,
            passengerCount: document.getElementById('passengerCount').value,
            routeName: document.getElementById('routeName').value,
            travelDate: document.getElementById('travelDate').value,
            bookiePan: document.getElementById('bookiePan').value,
            users:users
            
        }, ()=>loadProfileData() )
    });


    // document.getElementById('btnLoadProfile').addEventListener('click', function(e){
    //     loadProfileData();
    // });
    

    //chrome.storage.onChanged.addListener(loadProfileData);

    function loadProfileData() {
        getStorageKey('profile', pro => {
            document.getElementById('userName').value = pro.userName;
            document.getElementById('userPassword').value = pro.userPassword;
            document.getElementById('passengerCount').value = pro.passengerCount;
            document.getElementById('routeName').value = pro.routeName;
            document.getElementById('travelDate').value = pro.travelDate;
            document.getElementById('bookiePan').value = pro.bookiePan;
            
            for (let rw = 0; rw < 5; rw++) {
                let u = pro.users[rw];
                for (let col = 0; col < 6; col++) {
                    let field = `c${col+1}${rw+1}`;
                    document.getElementById(field).value = u[field];
                }                
            }

        }, () => {
            document.getElementById('userName').value = '';
            document.getElementById('userPassword').value = '';
            document.getElementById('passengerCount').value = undefined;
            document.getElementById('routeName').value = undefined;
            document.getElementById('travelDate').value = '';
            document.getElementById('bookiePan').value = '';

            for (let rw = 0; rw < 5; rw++) {                
                for (let col = 0; col < 6; col++) {
                    let field = `c${col+1}${rw+1}`;
                    document.getElementById(field).value = '';
                }                
            }
        } );
    }
    
  
    // document.getElementById('HeliBookBtn').addEventListener('click', function() {
    //   chrome.runtime.sendMessage({'HeliBookBtn_Start': true});
    // });
  });
  