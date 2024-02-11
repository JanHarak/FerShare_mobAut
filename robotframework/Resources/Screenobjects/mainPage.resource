# Created by JanHarakTesena at 13.11.2023
*** Settings ***
Library  AppiumLibrary
*** Variables ***
${pocetKm}           com.FerShare.fershare:id/editTextTotalkm
${prumernaSpotreba}  com.FerShare.fershare:id/editTextFuelConsume
${cenaZaLitr}        com.FerShare.fershare:id/editTextPricePerLiter
${pocetOsob}         com.FerShare.fershare:id/editTextNumPerson
${dalsiNaklady}      com.FerShare.fershare:id/editOtherCosts
${tlacikoSpocitat}   com.FerShare.fershare:id/btnCalculate
${cenaCelkem}        com.FerShare.fershare:id/resultPriceValue
${cenaZaJednotlice}  com.FerShare.fershare:id/resultPricePerPersonValue

${nastavení}         com.FerShare.fershare:id/settings
${vymazat}           com.FerShare.fershare:id/btnClear

${kalkulatorTab}     xpath=(*//android.widget.FrameLayout[@content-desc="Kalkulačka"])



*** Keywords ***
Zadej pocet km
    [Arguments]  ${hodnota}
    Wait Until Page Contains Element  ${pocetKm}
    Input Text  ${pocetKm}  ${hodnota}

Zadej spotřebu na km
    [Arguments]  ${hodnota}
    Wait Until Page Contains Element  ${prumernaSpotreba}
    Input Text  ${prumernaSpotreba}  ${hodnota}

Zadej cenu paliva
    [Arguments]  ${hodnota}
    Wait Until Page Contains Element  ${cenaZaLitr}
    Input Text  ${cenaZaLitr}  ${hodnota}
Zadej pocet osob
    [Arguments]  ${hodnota}
    Wait Until Page Contains Element  ${pocetOsob}
    Input Text  ${pocetOsob}  ${hodnota}
Zadej další náklady
    [Arguments]  ${hodnota}
    Wait Until Page Contains Element  ${dalsiNaklady}
    Input Text  ${dalsiNaklady}  ${hodnota}

Klikni na spočítat
    Wait Until Page Contains Element  ${tlacikoSpocitat}
    Click Element    ${tlacikoSpocitat}

Zkontroluj celkovou cenu
    [Arguments]  ${hodnota}    
    ${totalPrice} =  Get Text     ${cenaCelkem}
    Should Be Equal    ${totalPrice}    ${hodnota}

Zkontroluj celkovou cenu za jednotlivce
    [Arguments]  ${hodnota}
    ${totalPrice} =  Get Text     ${cenaZaJednotlice}
    Should Be Equal    ${totalPrice}    ${hodnota}


Prejdi na nastavení
    Click Element  ${nastavení}

Zkontroluj povinná pole
    FOR  ${i}  IN RANGE  1  4
        Wait Until Page Contains Element  xpath=(*//android.widget.LinearLayout[${i}]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.TextView)
    END