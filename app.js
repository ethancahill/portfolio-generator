const profileDataArr = process.argv.slice(2, process.argv.length);


const printProfileData = profileDataArr => {
    //this....
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }


    console.log('===============');

    //Is the same as this...
    profileDataArr.forEach((profileItem) => {
    console.log(profileItem)
    });

    console.log('===============')

    profileDataArr.forEach(profileItem => console.log(profileItem))
};

printProfileData(profileDataArr);