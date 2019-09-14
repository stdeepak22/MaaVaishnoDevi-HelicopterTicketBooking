let contextMenus = {};

contextMenus.bookTicket = chrome.contextMenus.create({
        title: "Book Ticket Ex",
        id: "rootLevelBookingMenu"
    },() => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    }
);

chrome.contextMenus.create({
    title: "1. Open Site",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep1
});

chrome.contextMenus.create({
    title: "2. Login Page",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep2
});

chrome.contextMenus.create({
    title: "3. Login",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep3
});

chrome.contextMenus.create({
    title: "4. Helicopter Booking Page",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep4
});

chrome.contextMenus.create({
    title: "5. Select Route and Timeslot",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep5
});

chrome.contextMenus.create({
    title: "6. Passenger Details and Payment Page",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep6
});

chrome.contextMenus.create({
    title: "7. Logout",
    parentId: "rootLevelBookingMenu",
    onclick: executeStep7
});


function EnableRightClick(){
    // chrome.tabs.onUpdated.addListener(function (tabId){
    //     chrome.tabs.executeScript({
    //         file: 'js/enable-rightclick.js'
    //     },_=>{
    //         let e = chrome.runtime.lastError;
    //         if(e !== undefined){
    //           console.log(tabId, _, e);
    //         }
    //       });
    // });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if(changeInfo.url!=undefined)
        {
            //alert('executing..');
            chrome.tabs.executeScript(tabId, {
                file: 'js/enable-rightclick.js'
            });
        }
     });
}

function executeStep1() {    
    EnableRightClick();
    chrome.tabs.executeScript({        
        file: 'js/Step1.js'
    })
}

function executeStep2() {
    EnableRightClick();
    chrome.tabs.executeScript({
        file: 'js/Step2.js'
    })
}

function executeStep3() {
    EnableRightClick();
    chrome.tabs.executeScript({
        file: 'js/Step3.js'
    })
}

function executeStep4() {
    EnableRightClick();    
    chrome.tabs.executeScript({
        file: 'js/Step4.js'
    })
}

function executeStep5() {
    EnableRightClick();
    chrome.tabs.executeScript({
        file: 'js/Step5.js'
    })
}

function executeStep6() {    
    chrome.tabs.executeScript({
        file: 'js/Step6.js'
    })
}

function executeStep7() {    
    chrome.tabs.executeScript({
        file: 'js/Step7.js'
    })
}

//chrome.contextMenus.onClicked.addListener(contextMenuHandler);
// function contextMenuHandler(info, tab) {
//     if (info.menuItemId === contextMenus.bookTicket) {
//         executeStep1();
//     }
// }