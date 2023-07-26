(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{804:function(r,e,t){"use strict";t.r(e);var a=t(5),v=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("p",[r._v("很多人可能會覺得 JVM 跟 DVM 是相似的虛擬機，因為 Java Code 可以跑在 JVM 也可以跑在 DVM。然而，兩者差異甚巨，本篇就來介紹兩者的不同吧😉")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://miro.medium.com/max/700/0*S08XLnRLUVWjfaNq.png",alt:""}})]),r._v(" "),t("p",[r._v("哇，這張圖就說完了，我後面來要講什麼🤣")]),r._v(" "),t("h2",{attrs:{id:"一、-jvm-跟-dvm-的差異比較"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、-jvm-跟-dvm-的差異比較"}},[r._v("#")]),r._v(" 一、 JVM 跟 DVM 的差異比較")]),r._v(" "),t("p",[r._v("這是兩者之差異的表格")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://d3i71xaburhd42.cloudfront.net/0ba3b0447a458ecd096dcdd42f908a93cfc0f7d6/3-Table1-1.png",alt:""}}),r._v(" "),t("img",{attrs:{src:"https://miro.medium.com/max/483/1*7AiR9XA-FXy9LCFsPFktqg.png",alt:""}})]),r._v(" "),t("table",[t("thead",[t("tr",[t("th",[r._v("差異項目")]),r._v(" "),t("th",[r._v("Java VM")]),r._v(" "),t("th",[r._v("Delvik VM")])])]),r._v(" "),t("tbody",[t("tr",[t("td",[r._v("架構圖")]),r._v(" "),t("td",[t("img",{attrs:{src:"https://miro.medium.com/max/609/1*Z52mbAxnhXWVu18yjzXNAA.png",alt:""}})]),r._v(" "),t("td",[t("img",{attrs:{src:"https://miro.medium.com/max/700/1*6A10IOQsv6qP6HsbXwvRwQ.jpeg",alt:""}})])]),r._v(" "),t("tr",[t("td",[r._v("開發公司")]),r._v(" "),t("td",[r._v("Sun(被 Oracle 收購)")]),r._v(" "),t("td",[r._v("Google")])]),r._v(" "),t("tr",[t("td",[r._v("虛擬機可執行文件格式")]),r._v(" "),t("td",[r._v(".class")]),r._v(" "),t("td",[r._v(".dex (Android 為 DVM 做的最佳化)")])]),r._v(" "),t("tr",[t("td",[r._v("可以執行.class ?")]),r._v(" "),t("td",[r._v("可以")]),r._v(" "),t("td",[r._v("不行，要使用 dex compiler 轉成 .dex 格式才行")])]),r._v(" "),t("tr",[t("td",[r._v("虛擬機模型")]),r._v(" "),t("td",[r._v("stack-based")]),r._v(" "),t("td",[r._v("register-based")])]),r._v(" "),t("tr",[t("td",[r._v("使用環境")]),r._v(" "),t("td",[r._v("PC")]),r._v(" "),t("td",[r._v("mobile device")])]),r._v(" "),t("tr",[t("td",[r._v("記憶體使用量")]),r._v(" "),t("td",[r._v("多")]),r._v(" "),t("td",[r._v("少")])]),r._v(" "),t("tr",[t("td",[r._v("虛擬機的實例")]),r._v(" "),t("td",[r._v("所有應用程式共享一個 JVM 實例")]),r._v(" "),t("td",[r._v("每一個應用程式都有一個自己的 DVM 實例")])]),r._v(" "),t("tr",[t("td",[r._v("作業系統")]),r._v(" "),t("td",[r._v("支援 Linux, Windows, MacOS")]),r._v(" "),t("td",[r._v("只支援 Android OS")])]),r._v(" "),t("tr",[t("td",[r._v("最終打包的執行檔")]),r._v(" "),t("td",[r._v("JAR")]),r._v(" "),t("td",[r._v("APK")])])])]),r._v(" "),t("p",[r._v("一旦你準備好 "),t("code",[r._v(".class")]),r._v(" 文件，您就可以將此文件提供給任何平台，它會將其轉換為本地機器程式碼。然而，Android 設備上為了提高執行效率，在編譯Android 項目時，Android 通過SDK 提供的工具 dex.jar(dex compiler) 會把所有的.class 文件最終打包成數個 "),t("code",[r._v(".dex")]),r._v(" 文件。")]),r._v(" "),t("p",[r._v("另外值得一提的是同一台設備中，JVM只能執行一個實例，也就是說這台設備的所有應用都執行在同一個JVM中，而DVM是經過最佳化的，它在同一台設備可以執行多個實例，每一款應用執行起來都會執行單獨的虛擬機（DVM），執行在單獨一個行程中。")]),r._v(" "),t("h2",{attrs:{id:"二、從-class-到-dex-的過程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、從-class-到-dex-的過程"}},[r._v("#")]),r._v(" 二、從 Class 到 Dex 的過程")]),r._v(" "),t("h3",{attrs:{id:"_2-1-被壓縮的-dex-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-被壓縮的-dex-文件"}},[r._v("#")]),r._v(" 2-1. 被壓縮的 .Dex 文件")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://miro.medium.com/max/1050/1*6A10IOQsv6qP6HsbXwvRwQ.jpeg",alt:""}}),r._v("\n從上圖可以看出，除了最後兩個步驟外，一切都與 JVM 相同。Dex 編譯器將類文件轉換為在 Dalvik VM 上執行的 .dex 文件。多個class文件轉換為一個dex文件， Dex 是一個更進一步最佳化的檔案格式，因此將多個 .class 轉成 .dex 檔，除了將 Bytecode 轉成 DVM 的指令外，也去除了大量冗餘，節省了很多儲存空間。 "),t("mark",[r._v("在來自相同 .class 的情形下，一個未被壓縮的 .dex  仍然比被壓縮後打包的 JAR (Java archive) 還小")])]),r._v(" "),t("h3",{attrs:{id:"_2-2-dex-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-dex-compiler"}},[r._v("#")]),r._v(" 2-2. Dex Compiler")]),r._v(" "),t("p",[r._v("Android第一版發佈時候使用的是JDK6，即只支持Java6的Bytecode Instruction。但是到現在Java已經發展到Java13了,期間加了新的Bytecode，增加了好多新的語言特性，以及新的API，Android 生態系統總不能一直讓開發者使用 Java6來開發吧，那樣估計開發者要起來反抗了？所以Google的想辦法支持Java7、8、9...")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-17c9c069fb863ede091efffb1a5e2a86_1440w.jpg",alt:""}})]),r._v(" "),t("p",[r._v("我們先將 java 的 .class 檔進行 desugar 的動作，desugar 來自語法糖，主要是因應後期 Java 語言新特性 (lambda, for loop 等)，有許多對開發者友善的語法糖。但是編譯的時候就需要脫糖。脫糖的目的有兩種")]),r._v(" "),t("ul",[t("li",[r._v("Java 新語言特性的支持")])]),r._v(" "),t("p",[r._v("就是新版本Java 引入的語言特性。例如: lambda、方法的使用等，這些是被最先支持的。支持的方式是通過將這些語言特性還原為對應的老式寫法。")]),r._v(" "),t("ul",[t("li",[r._v("Java 新語言Api的支持")])]),r._v(" "),t("p",[r._v("對新版本API的支持。例如Java 8 新引入的"),t("code",[r._v("java.util.stream")]),r._v(" 已經新的時間api "),t("code",[r._v("java.time")]),r._v("。這個不好弄了，因為老版本Android攜帶的jre根本沒有這套東西，怎麼辦呢？")]),r._v(" "),t("p",[r._v("編譯器（D8/R8）幫你實現一套，然後打包成"),t("code",[r._v(".dex")]),r._v("文件加到你的apk中，然後讓你的程式碼使用這裡面的實現。")]),r._v(" "),t("p",[r._v("之後使用開源實用程式 "),t("a",{attrs:{href:"https://www.guardsquare.com/proguard",target:"_blank",rel:"noopener noreferrer"}},[r._v("ProGuard"),t("OutboundLink")],1),r._v(" 縮小生成的Bytecode，在用 Dex compiler 更進一步編譯。得到更小的 .dex 檔案。")]),r._v(" "),t("h3",{attrs:{id:"_2-2-dex-第一次進化-d8-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-dex-第一次進化-d8-compiler"}},[r._v("#")]),r._v(" 2-2. Dex 第一次進化 - D8 Compiler")]),r._v(" "),t("p",[r._v("最初，使用內置的 DX 編譯器將.class文件轉換為.dex。但是從 "),t("code",[r._v("Android Studio 3.1")]),r._v("開始，默認編譯器是D8，D8全稱是Dope8。與 DX 編譯器相比，D8 編譯速度更快，輸出的 "),t("code",[r._v(".dex")]),r._v(" 文件更小，在執行時提升更好的效能。\n"),t("img",{attrs:{src:"https://miro.medium.com/max/700/0*4nbRcXA2xUDzz3iy.png",alt:""}}),r._v(" "),t("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-354b30338e5f8a10a254e51d93cc50a6_1440w.jpg",alt:""}}),r._v("\n可以明顯看到，以前脫糖這一個過程是作為編譯的一個單獨步驟進行的，編譯為.class後就是脫糖，脫糖後執行 ProGuard，然後再編譯為.dex文件。D8將脫糖和編譯為.dex文件這兩步合併為一步來執行了。D8脫糖後的 Bytecode精確度和執行效率都更高。")]),r._v(" "),t("h3",{attrs:{id:"_2-3-dex-第二次進化-r8-compiler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-dex-第二次進化-r8-compiler"}},[r._v("#")]),r._v(" 2-3. Dex 第二次進化 - R8 Compiler")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://miro.medium.com/max/700/0*gBzWCfvFOJfisar1.png",alt:""}}),r._v(" "),t("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-4f5e52e2c022f30252fb9412dc8417fc_1440w.jpg",alt:""}})]),r._v(" "),t("p",[r._v("Java生態一般使用ProGuard對Bytecode進行最佳化，而R8將ProGuard這一步的功能給整合到了Dalvik 生成環節中了，不管是ProGuard還是R8主要從下面幾個方面進行最佳化：")]),r._v(" "),t("ul",[t("li",[r._v("收縮(shrinking)：去掉沒有使用的類，方法，字段等等。")]),r._v(" "),t("li",[r._v("混淆(obfuscation)：縮短類和成員的名稱，從而減小DEX文件的大小。")]),r._v(" "),t("li",[r._v("程式碼最佳化(optimization)：從指令層面上最佳化，例如指令重排等。檢查並重寫程式碼，以進一步減小應用的DEX文件的大小。")])]),r._v(" "),t("p",[r._v("更多細節請參照 "),t("a",{attrs:{href:"https://developer.android.google.cn/studio/build/shrink-code?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[r._v(" Android 官方網站 - 縮減、混淆處理和優化應用"),t("OutboundLink")],1)]),r._v(" "),t("p",[t("img",{attrs:{src:"https://miro.medium.com/max/1050/0*yKZnJN2CfYduLCTf.png",alt:""}})]),r._v(" "),t("p",[r._v("所以由上表，可以看出 R8 幫我們程式碼做瘦身。")]),r._v(" "),t("p",[r._v("這裡只簡單介紹從 class 到 dex 經過了哪些操作及演進，相關細節以後有時間會談🤣。")]),r._v(" "),t("h2",{attrs:{id:"三、為何-android-不直接用-jvm-而要用-dvm、art"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、為何-android-不直接用-jvm-而要用-dvm、art"}},[r._v("#")]),r._v(" 三、為何 Android 不直接用 JVM 而要用 DVM、ART ?")]),r._v(" "),t("h3",{attrs:{id:"_3-1-dvm-相對於-jvm-的優勢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dvm-相對於-jvm-的優勢"}},[r._v("#")]),r._v(" 3-1. DVM 相對於 JVM 的優勢")]),r._v(" "),t("p",[r._v("由於Androd 執行在移動設備上，記憶體以及電量等諸多方面跟一般的 PC 設備都有本質的區別，一般的 JVM 沒法滿足移動設備的要求，太吃資源、太笨重了，所以在開發 Android 過程中，Android 團隊一開始就必須打造一個符合移動設備的可以執行 Java 的虛擬機。")]),r._v(" "),t("p",[r._v("Dalvik 經過最佳化，變得很輕巧。執行跟載入的速度變得很快，允許在有限的記憶體中同時執行多個虛擬機的實例，並且每一個 Dalvik 應用作為一個獨立的Linux 行程執行。獨立的進程可以防止在虛擬機崩潰的時候所有程序都被關閉。每一個應用程式都有自己的虛擬機。")]),r._v(" "),t("p",[r._v("除了上面提到的，還有以下幾點。")]),r._v(" "),t("ol",[t("li",[t("p",[r._v("Dalvik 負責進程隔離和線程管理，每一個Android應用在底層都會對應一個獨立的Dalvik虛擬機實例，其程式碼在虛擬機的解釋下得以執行。")])]),r._v(" "),t("li",[t("p",[r._v("dex 文件格式可以減少整體文件尺寸，提高I/O操作的類查找速度。")])]),r._v(" "),t("li",[t("p",[t("mark",[r._v("有一個特殊的虛擬機行程 Zygote")]),r._v(" ，他是虛擬機實例的孵化器。它在系統啟動的時候就會產生，它會完成虛擬機的初始化、庫的加載、預製類庫和初始化的操作。如果系統需要一個新的虛擬機實例，它會迅速復制自身，以最快的速度提供給系統。")])]),r._v(" "),t("li",[t("p",[r._v("虛擬機的暫存器架構模型本身就不同。JVM 是 stack-based VM 而 DVM 是 register-based，執行效率較高。")])])]),r._v(" "),t("h3",{attrs:{id:"_3-2-oracle-跟-google-的紛爭-api到底該不該有版權保護"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-oracle-跟-google-的紛爭-api到底該不該有版權保護"}},[r._v("#")]),r._v(" 3-2. Oracle 跟 Google 的紛爭 - API到底該不該有版權保護")]),r._v(" "),t("p",[r._v("JVM 是 GPL License，而 Android 是 Apache License。")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("更多授權的比較 : "),t("a",{attrs:{href:"http://inspiregate.com/internet/trends/74-comparison-of-five-kinds-of-standard-open-source-license-bsd-apache-gpl-lgpl-mit.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("五種開源授權規範的比較 (BSD, Apache, GPL, LGPL, MIT)"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[r._v("官司的新聞 : "),t("a",{attrs:{href:"https://technews.tw/2020/10/13/supreme-court-hears-copyright-battle-between-google-and-oracle/",target:"_blank",rel:"noopener noreferrer"}},[r._v("有望落幕！美最高法院將對甲骨文和 Google 的 10 年 API 之爭下最終裁決"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[r._v("官司的維基 : "),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%94%B2%E9%AA%A8%E6%96%87%E8%AF%89%E8%B0%B7%E6%AD%8CJava%E4%BE%B5%E6%9D%83%E6%A1%88",target:"_blank",rel:"noopener noreferrer"}},[r._v("甲骨文訴GoogleJava侵權案"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[r._v("知乎的討論 : "),t("a",{attrs:{href:"https://www.zhihu.com/question/270271649/answer/379453799",target:"_blank",rel:"noopener noreferrer"}},[r._v("為什麼Google 要賠Oracle 88 億？"),t("OutboundLink")],1)])])]),r._v(" "),t("h3",{attrs:{id:"_3-3-google-想要所有的流程都自己掌握"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-google-想要所有的流程都自己掌握"}},[r._v("#")]),r._v(" 3-3. Google 想要所有的流程都自己掌握")]),r._v(" "),t("p",[r._v("如果直接使用 JVM 的話，可能又有版權問題，Google 開發團隊想要從頭到尾自己開發，在最佳化的工作上才能完全掌握。")]),r._v(" "),t("p",[r._v("其實最主要是第一點，JVM太笨重不適合放在硬體資源有限的行動裝置，且大家共用一個 JVM，只有一個實例，一但 JVM 掛了，所有跑在上面的應用程式都掛了，那使用者不是會氣死🤣")]),r._v(" "),t("h2",{attrs:{id:"四、參考連結"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、參考連結"}},[r._v("#")]),r._v(" 四、參考連結")]),r._v(" "),t("ol",[t("li",[t("p",[t("a",{attrs:{href:"https://towardsdatascience.com/jvm-vs-dvm-b257229d18a2",target:"_blank",rel:"noopener noreferrer"}},[r._v("JVM vs DVM"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.zhihu.com/question/20207106",target:"_blank",rel:"noopener noreferrer"}},[r._v("Dalvik 虛擬機和Sun JVM 在架構和執行方面有什麼本質區別？"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://levelup.gitconnected.com/android-dvm-vs-art-5687c7903e65",target:"_blank",rel:"noopener noreferrer"}},[r._v("Android：Dalvik vs ART"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://medium.com/android-news/closer-look-at-android-runtime-dvm-vs-art-1dc5240c3924",target:"_blank",rel:"noopener noreferrer"}},[r._v("Closer Look At Android Runtime: DVM vs ART(推薦)"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/a8cc7a92137c",target:"_blank",rel:"noopener noreferrer"}},[r._v("JVM、Dalvik、ART 介紹"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.guardsquare.com/proguard",target:"_blank",rel:"noopener noreferrer"}},[r._v("ProGuard"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://chloe-thhsu.medium.com/android-art-vs-dalvik-%E5%B7%AE%E5%88%A5-c69df49f0b31",target:"_blank",rel:"noopener noreferrer"}},[r._v("Android ART vs Dalvik 差別"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://slidetodoc.com/androidosgi-luminisproject-android-dalvik-vm-google-android-javaandroid/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Android 與 OSGI 平台整合"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.codeproject.com/Articles/1013621/ART-vs-Dalvik-Introducing-the-New-Android-x-Runtim",target:"_blank",rel:"noopener noreferrer"}},[r._v("ART vs Dalvik - Introducing the New Android x86 Runtime"),t("OutboundLink")],1)])]),r._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/95626955",target:"_blank",rel:"noopener noreferrer"}},[r._v("深入理解Android虛擬機及編譯系統"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=v.exports}}]);