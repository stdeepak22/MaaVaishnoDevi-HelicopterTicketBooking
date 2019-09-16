// var data = {
//     bookiePan: 'PANCD1001A',
//     passengers: [{
//             name: 'First Passen',
//             gender: 'Male',
//             age: 35,
//             idType: 'Credit Card',
//             idNo: '7867-9865-5678-1297',
//             contact: '8787878787'
//         },
//         {
//             name: 'Second Passen',
//             gender: 'Female',
//             age: 30,
//             idType: 'Pan Card',
//             idNo: 'EROPL3666Z',
//             contact: '9987878787'
//         },
//         {
//             name: 'Third Passen',
//             gender: 'Male',
//             age: 45,
//             idType: 'Driving License',
//             idNo: '7867-9865-5678-0000',
//             contact: '8787878787'
//         },
//         {
//             name: 'Fourth Passen',
//             gender: 'Female',
//             age: 40,
//             idType: 'AADHAAR Card',
//             idNo: 'EROPL3666X',
//             contact: '9987878787'
//         }
//     ]
// };

(function () {
    // let idTypeDllVal = {
    //     'AADHAAR Card': 'AADHAAR',
    //     'Bank Passbook': 'NBPB',
    //     'Credit Card': 'CRCD',
    //     'Driving License': 'DRLC',
    //     'Govt issued I-Card': 'GOVT',
    //     'Pan Card': 'PANC',
    //     'Passport': 'PSPT',
    //     'Student I-Card': 'STUD',
    //     'Voter I-Card': 'VOTE'
    // };
    document.querySelector('#PANNo').value = stProfile.bookiePan;
    for (let index = 0; index < stProfile.passengerCount; index++) {
        const user = stProfile.users[index];
        
        document.querySelector(`#TextBoxRow1${index+1}`).value = user[`c1${index+1}`];
        document.querySelector(`#DrpGender2${index+1}`).value = user[`c2${index+1}`];        
        document.querySelector(`#TextBoxRow3${index+1}`).value = user[`c3${index+1}`];
        document.querySelector(`#DrpIDNature4${index+1}`).value = user[`c4${index+1}`];  
        document.querySelector(`#TextBoxRow5${index+1}`).value = user[`c5${index+1}`];  
        document.querySelector(`#TextBoxRow6${index+1}`).value = user[`c6${index+1}`];
    }
    document.querySelector('#BtnContinue').click();
})();
