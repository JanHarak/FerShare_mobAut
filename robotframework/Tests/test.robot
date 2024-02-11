*** Settings ***
Library          AppiumLibrary
Resource        ../Resources/init.robot


Test Setup  Open App

*** Test Cases ***
Calculate fuel consume
    [Documentation]  Happy scenar pro vypocet spotřeby a ceny
    [Tags]  TC01  happyPath
    Zadej pocet km                              420
    Zadej spotřebu na km                        5.8
    Zadej cenu paliva                         39.90
    Zadej pocet osob                              3
    Zadej další náklady                         720
    Klikni na spočítat
    Zkontroluj celkovou cenu                1691.96
    Zkontroluj celkovou cenu za jednotlivce  563.99


Check Mandatory fields
    [Documentation]  Happy scenar pro kontrolu poviných polí
    [Tags]  TC02  happyPath
    Klikni na spočítat
    Zkontroluj povinná pole
    Zkontroluj celkovou cenu                     --
    Zkontroluj celkovou cenu za jednotlivce      --

