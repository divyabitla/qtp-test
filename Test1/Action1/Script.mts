 @@ hightlight id_;_65696_;_script infofile_;_ZIP::ssf1.xml_;_
SystemUtil.Run "C:\Program Files\HP\QuickTest Professional\samples\flight\app\flight4a.exe","","C:\Program Files\HP\QuickTest Professional\samples\flight\app\","open"
Dialog("Login").WinEdit("Agent Name:").Set "ajay" @@ hightlight id_;_131944_;_script infofile_;_ZIP::ssf2.xml_;_



Dialog("Login").WinEdit("Password:").SetSecure "587a606c4f1052108e617ee48a1213ea564fb9bb" @@ hightlight id_;_131940_;_script infofile_;_ZIP::ssf3.xml_;_
Dialog("Login").WinButton("OK").Click @@ hightlight id_;_131942_;_script infofile_;_ZIP::ssf4.xml_;_
Window("Flight Reservation").ActiveX("MaskEdBox").Type "121217" @@ hightlight id_;_66460_;_script infofile_;_ZIP::ssf5.xml_;_
Window("Flight Reservation").WinComboBox("Fly From:").Select "Frankfurt" @@ hightlight id_;_394030_;_script infofile_;_ZIP::ssf6.xml_;_
Window("Flight Reservation").WinComboBox("Fly To:").Select "Denver" @@ hightlight id_;_197474_;_script infofile_;_ZIP::ssf7.xml_;_
'validating the flight button is enbles or not
Window("Flight Reservation").WinButton("FLIGHT").Check CheckPoint("FLIGHT") @@ hightlight id_;_590582_;_script infofile_;_ZIP::ssf12.xml_;_

Window("Flight Reservation").WinButton("FLIGHT").Click @@ hightlight id_;_197478_;_script infofile_;_ZIP::ssf8.xml_;_
Window("Flight Reservation").Dialog("Flights Table").WinList("From").Activate "20074   FRA   08:00 AM   DEN   08:45 AM   SR     $162.40" @@ hightlight id_;_66470_;_script infofile_;_ZIP::ssf9.xml_;_
Window("Flight Reservation").WinEdit("Name:").Set "ajay" @@ hightlight id_;_197476_;_script infofile_;_ZIP::ssf10.xml_;_
'check the insert order button is enabled
Window("Flight Reservation").WinButton("Insert Order").Check CheckPoint("Insert Order") @@ hightlight id_;_656232_;_script infofile_;_ZIP::ssf13.xml_;_


Window("Flight Reservation").WinButton("Insert Order").Click @@ hightlight id_;_394022_;_script infofile_;_ZIP::ssf11.xml_;_
'
'check after placing order insert button should be disabled


Window("Flight Reservation").WinButton("Insert Order").Check CheckPoint("Insert Order_2") @@ hightlight id_;_656232_;_script infofile_;_ZIP::ssf14.xml_;_

'validate update order  and delete button are enabled

Window("Flight Reservation").WinButton("Update Order").Check CheckPoint("Update Order") @@ hightlight id_;_787212_;_script infofile_;_ZIP::ssf15.xml_;_
Window("Flight Reservation").WinButton("Delete Order").Check CheckPoint("Delete Order") @@ hightlight id_;_590732_;_script infofile_;_ZIP::ssf16.xml_;_


Window("Flight Reservation").Close
