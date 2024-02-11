*** Settings ***
Library          AppiumLibrary
Library          Collections
Resource        ../Resources/Screenobjects/mainPage.resource

*** Variables ***
${appium_server}            http://localhost:4723
${platform}                 Android
${adbDevice}                emulator-5554
${resetoff}                 false
${ANDROID_AUTOMATION_NAME}  UiAutomator2
## ---------  Booking  -------------------
#${appLocation}              ${CURDIR}/../Data/Booking.apk
#${package_name}             com.booking
#${AppMainActivity}          com.booking.identity.privacy.ui.PrivacyAppActivity

# ---------  FerShare  --------------------
${appLocation}       ${CURDIR}/../Data/fershare.apk
${package_name}      com.FerShare.fershare
${AppMainActivity}   com.FerShare.fershare.MainActivity



*** Keywords ***
Open App
    Open Application    ${appium_server}
    ...                 platformName=${platform}
    ...                 deviceName=${adbDevice}
    ...                 app=${appLocation}
    ...                 appPackage=${package_name}
    ...                 appActivity=${AppMainActivity}
    ...                 automationName=${ANDROID_AUTOMATION_NAME}
    ...                 noReset=${resetoff}


