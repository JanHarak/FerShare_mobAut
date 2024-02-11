# Created by JanHarakTesena at 13.11.2023
*** Settings ***
Library  AppiumLibrary
*** Variables ***

${settingsTitle} =  xpath=(*//android.widget.TextView[@text(),"Nastavení"])
${editBtn} =  xpath=(*//android.widget.TextView[@text(),"Editovat"])
${BackBtn} =  xpath=(*//android.widget.TextView[@resource-id="com.FerShare.fershare:id/backPress"])




*** Keywords ***

Zkontroluj nastavení
    