/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1752e71a3cbd9a6ba3cc62762722661"
  },
  {
    "url": "app_icons/144.png",
    "revision": "b2e5640bfc403f68fea984dfa3ca7fa3"
  },
  {
    "url": "app_icons/150.png",
    "revision": "68b075b5a35f02756681d69d2726a37d"
  },
  {
    "url": "app_icons/16.png",
    "revision": "728dba7184d9a958b7205a58a7e6e767"
  },
  {
    "url": "app_icons/180.png",
    "revision": "261641ab74190a1b764d78bbf907bb10"
  },
  {
    "url": "app_icons/192_pwa.png",
    "revision": "6fbcbef24f3ed8a9cc00e575af8856bc"
  },
  {
    "url": "app_icons/192.png",
    "revision": "3051ea51522210478cdfe7e0dba9050c"
  },
  {
    "url": "app_icons/32.png",
    "revision": "8e1bab4d64b44ec79cd562835809a13d"
  },
  {
    "url": "app_icons/36.png",
    "revision": "67d764b75368596b14adfafbdbbff298"
  },
  {
    "url": "app_icons/48.png",
    "revision": "a4d46780a5a70d3eebf71ed3dfc1e674"
  },
  {
    "url": "app_icons/512.png",
    "revision": "fca20ec2e17a37cfd130f7bc1718cab5"
  },
  {
    "url": "app_icons/70.png",
    "revision": "9d54834ee14b337e27d6069f5621845f"
  },
  {
    "url": "app_icons/72.png",
    "revision": "6776eceec7c57c033d0cc22c9bc4bd00"
  },
  {
    "url": "app_icons/96.png",
    "revision": "4e526b32646163ecb28f3e13469886c8"
  },
  {
    "url": "assets/css/0.styles.ab74dbcc.css",
    "revision": "007fedf4b769ac4e1f45e17b1d264e49"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",
    "revision": "2dbe16b4f4662798159f8d62c8d2509d"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",
    "revision": "38a68f7d18d292349a6e802a66136eae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",
    "revision": "7d307e8337b9559e4040c5fb76819789"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",
    "revision": "33d26881e4dd89321525c43b993f136c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",
    "revision": "5e7940b4ed250e98a512f520e39c867d"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",
    "revision": "4de87d40f0389255d975c69d45a0a7e7"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",
    "revision": "7a3757c0bfc580d91012d092ec8f06cb"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",
    "revision": "ed330126290a846bf0bb78f61aa6a080"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",
    "revision": "450cc4d9319c4a438dd00514efac941b"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",
    "revision": "82d05fe2abb0da9d1077110efada0f6e"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",
    "revision": "dc4e330b6334767a16619c60d9ebce8c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",
    "revision": "2e1915b1a2f33c8ca9d1534193e934d7"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.62c69756.woff",
    "revision": "62c69756b3f1ca7b52fea2bea1030cd2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",
    "revision": "78b0124fc13059862cfbe4c95ff68583"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",
    "revision": "0d817b487b7fc993bda7dddba745d497"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",
    "revision": "a2e3dcd2316f5002ee2b5f35614849a8"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",
    "revision": "c7213ceb79250c2ca46cc34ff3b1aa49"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.081073fd.woff",
    "revision": "081073fd6a7c66073ad231db887de944"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",
    "revision": "767e06e1df6abd16e092684bffa71c38"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.eea32672.woff2",
    "revision": "eea32672f64250e9d1dfb68177c20a26"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",
    "revision": "689bbe6b67f22ffb51b15cc6cfa8facf"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.756fad0d.woff",
    "revision": "756fad0d6f3dff1062cfa951751d744c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",
    "revision": "f30e3b213e9a74cf7563b0c3ee878436"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",
    "revision": "753ca3dfa44302604bec8e08412ad1c1"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",
    "revision": "b3e80ff3816595ffb07082257d30b24f"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",
    "revision": "d9377b53f267ef7669fbcce45a74d4c7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",
    "revision": "0343f93ed09558b81aaca43fc4386462"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",
    "revision": "2a39f3827133ad0aeb2087d10411cbf2"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.67710bb2.woff",
    "revision": "67710bb2357b8ee5c04d169dc440c69d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",
    "revision": "59b3773389adfb2b21238892c08322ca"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",
    "revision": "dfcc59ad994a0513b07ef3309b8b5159"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",
    "revision": "f28c4fa28f596796702fea3716d82052"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",
    "revision": "3ab5188c9aadedf425ea63c6b6568df7"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",
    "revision": "99ad93a4600c7b00b961d70943259032"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",
    "revision": "9d0fdf5d7d27b0e3bdc740d90b40ec57"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",
    "revision": "6c3bd5b57f7eba215a2d37e2e28077f1"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",
    "revision": "badf3598c22478fd9155a49391ecd396"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",
    "revision": "d511ebcef253ab53775576f28315f350"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.082640ca.ttf",
    "revision": "082640ca4242bb2aade86855e4d7d5f6"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",
    "revision": "4edf4e0fd49c8a5680dd541c05f16a4c"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",
    "revision": "af7bc98b2200573686405dc784f53cf2"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",
    "revision": "2c2dc3b057bb48b80bc785ac3d87ecf8"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",
    "revision": "114ad19833311359052ad1a174159262"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",
    "revision": "70174da79d1707501c10e07872e84667"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",
    "revision": "35fe2cce0791c276b8e919decd873f5b"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",
    "revision": "53dcf861876aae6f3a6a6004dc3bc758"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",
    "revision": "641339e2cd86c7816bfb8028ee7f86e0"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.eb51895b.js",
    "revision": "03c034bb9bc89985d23871d59e92176d"
  },
  {
    "url": "assets/js/10.153f0244.js",
    "revision": "624ceeb2274b2d5f38ba40424caf5a89"
  },
  {
    "url": "assets/js/11.21d0c1ea.js",
    "revision": "f3020079bfcf50e7cdb444e058be4810"
  },
  {
    "url": "assets/js/12.70496030.js",
    "revision": "0c30c0e873720d072be238b11e4f23f3"
  },
  {
    "url": "assets/js/13.288e3bf1.js",
    "revision": "5178ee5caa103d88169b08541db8e532"
  },
  {
    "url": "assets/js/14.d9abdf81.js",
    "revision": "0e9ba928a1db2cc709eb7089e90b5423"
  },
  {
    "url": "assets/js/15.d0872675.js",
    "revision": "d836a5337853bba7b0b856488ff4cf0f"
  },
  {
    "url": "assets/js/16.976d2584.js",
    "revision": "78c8a724b7eb3cde6927ad9fb6df395d"
  },
  {
    "url": "assets/js/17.cacdcd0a.js",
    "revision": "2137ea2564f3a24e14964cd6998e363d"
  },
  {
    "url": "assets/js/18.fa8cde33.js",
    "revision": "629055faeda3e6a90e571bbe9c217bca"
  },
  {
    "url": "assets/js/19.b3c4e3ef.js",
    "revision": "3c70095fe2afe427d87d6524fe3d603c"
  },
  {
    "url": "assets/js/20.9f8403ef.js",
    "revision": "6f877ca7ba4531cd8c4ad17732586900"
  },
  {
    "url": "assets/js/21.cf400393.js",
    "revision": "abb35170854f2339d41bbeb28634dc86"
  },
  {
    "url": "assets/js/22.3199e60c.js",
    "revision": "5ef50b8011f98338861071a3d068d978"
  },
  {
    "url": "assets/js/23.1325b855.js",
    "revision": "b621bfb4cd6e47d4bf63fb4e07d75977"
  },
  {
    "url": "assets/js/24.562aab8c.js",
    "revision": "dca97bcefbfd36cfc4ed8e6b71d75d21"
  },
  {
    "url": "assets/js/25.96b5d002.js",
    "revision": "a98a3601f4d1a3e971d8997fe11755e2"
  },
  {
    "url": "assets/js/26.e39bfa70.js",
    "revision": "024f1fb4c7e4b647bc88faf6a9ccf7d3"
  },
  {
    "url": "assets/js/27.344ef358.js",
    "revision": "bc4f10a06150bbf42dc7bfe9f9380d63"
  },
  {
    "url": "assets/js/28.028c8686.js",
    "revision": "db144c499e4909a579c0d313beed9e86"
  },
  {
    "url": "assets/js/29.b4a01d78.js",
    "revision": "f42df5de90dfbf43500e038f974d2655"
  },
  {
    "url": "assets/js/30.eee4a1f1.js",
    "revision": "4403b0654c01ee693613706989d0ea10"
  },
  {
    "url": "assets/js/31.d6beec0f.js",
    "revision": "cff2629a497c18e2e2dd95e3ef42ce90"
  },
  {
    "url": "assets/js/32.ccc1cfee.js",
    "revision": "1cb30ea930773024b7c130f49e994beb"
  },
  {
    "url": "assets/js/33.9791bd34.js",
    "revision": "2009bdda823067ce1de7ff76c3d3b3ea"
  },
  {
    "url": "assets/js/34.2e00dfef.js",
    "revision": "ff27353600649b658426aec99a414cc7"
  },
  {
    "url": "assets/js/35.07086968.js",
    "revision": "4e81385fd6b97df1c6b8c68198f8c7ac"
  },
  {
    "url": "assets/js/36.67048b2d.js",
    "revision": "2e396f7908e3fd888f811c7d40e7693c"
  },
  {
    "url": "assets/js/37.a415b76e.js",
    "revision": "73def1bc0cc3d50c513f1b6b7d03267d"
  },
  {
    "url": "assets/js/38.57199780.js",
    "revision": "7a49fbc8eec6fd625004e38dd2e6c613"
  },
  {
    "url": "assets/js/39.c2819c68.js",
    "revision": "ea37b86bfcb49ba9eeb0084928ada9da"
  },
  {
    "url": "assets/js/40.80d200d1.js",
    "revision": "9f138a1546405d4866e733ee825b6ef9"
  },
  {
    "url": "assets/js/41.1948cdfe.js",
    "revision": "6e24dee06dbabd928b656ea18dc9c095"
  },
  {
    "url": "assets/js/6.5a677154.js",
    "revision": "a015463765099665161fa05c35768f88"
  },
  {
    "url": "assets/js/7.ff64a05d.js",
    "revision": "ca9df3205a894b79cbd518771101da40"
  },
  {
    "url": "assets/js/8.9c5e7b1f.js",
    "revision": "336b5f71d9033cbc71ccd6eb5c9ec2a1"
  },
  {
    "url": "assets/js/9.df73a708.js",
    "revision": "df57b13592c0f0e6a8814aaef32edb4d"
  },
  {
    "url": "assets/js/app.01fd89eb.js",
    "revision": "5e4fc1a8202347984801e122f53ee827"
  },
  {
    "url": "assets/js/vendors~flowchart.15880f81.js",
    "revision": "69d071fc33c263e471e2b4c1fa2065df"
  },
  {
    "url": "assets/js/vendors~mermaid.db8915cf.js",
    "revision": "9c6e2ae0842ead628086a680569ff29c"
  },
  {
    "url": "assets/js/vendors~reveal.2eb356a7.js",
    "revision": "fb7cc9944301ba9ba1d6f583a28a956c"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/aboutme/aboutme.html",
    "revision": "8b06768a1479569f16dca37a06d9f02b"
  },
  {
    "url": "blogs/ELF/dynamic.html",
    "revision": "bd978c617abc9fec2e63515b98775dfc"
  },
  {
    "url": "blogs/ELF/elf_format.html",
    "revision": "ba653957eaf89d38801c64122be355c0"
  },
  {
    "url": "blogs/ELF/Introduction.html",
    "revision": "d630ac0f6dd5968f42b500573511e791"
  },
  {
    "url": "blogs/ELF/main.html",
    "revision": "2f7d6d65ec9140d6604f86c7ad6fe21e"
  },
  {
    "url": "blogs/ELF/symbol.html",
    "revision": "69ebbcb7a1d58719cc1542d5b338c40c"
  },
  {
    "url": "blogs/IEEE_754/IEEE754.html",
    "revision": "b047fe06d5ce509e47ea3084b4253592"
  },
  {
    "url": "blogs/Just_in_time_compiler/JIT.html",
    "revision": "21390817cb53ad7a7a00d505e0452fb2"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part1.html",
    "revision": "0f9427961e1008d097dcd4372a6a8c48"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part2.html",
    "revision": "76429d284f94ca30d0e0fb5b2dc67dee"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part3.html",
    "revision": "e66593e5b0dafe3a3d67e881916e0e9f"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part4.html",
    "revision": "586860dba565e743231e2a21eec7bc8e"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part5.html",
    "revision": "9f65a044a92da10cdfd91f3fb07499b5"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part6.html",
    "revision": "98de92b3b429484bc6a68cf666a8d712"
  },
  {
    "url": "blogs/LLVM/LLVM_intro.html",
    "revision": "ad64a97c5da198778c455fed37a3a258"
  },
  {
    "url": "blogs/MLIR/MLIR.html",
    "revision": "0a05bfb61c1683c764a010f135bacc04"
  },
  {
    "url": "blogs/Python_Internal/Part0_beginning.html",
    "revision": "5628f8a9479269e5d11591219142554d"
  },
  {
    "url": "blogs/VM/android_vm.html",
    "revision": "ea6ff47f6d6747d76b40a758f344492e"
  },
  {
    "url": "blogs/VM/BPF.html",
    "revision": "92b3dd3d001848d7bafdf61d1d186c49"
  },
  {
    "url": "blogs/VM/Dalvik_JVM.html",
    "revision": "dc6c3a070d1227ec34e0664eca1de3ca"
  },
  {
    "url": "blogs/VM/pypy.html",
    "revision": "424d3f5e3e664722202cfe5e85d4f6c0"
  },
  {
    "url": "blogs/VM/stack_register.html",
    "revision": "20399552ba7df02affd730a575074645"
  },
  {
    "url": "blogs/VM/vm_intro.html",
    "revision": "f088b3017dfededde94b22005141ddb8"
  },
  {
    "url": "categories/ELF/index.html",
    "revision": "394ad3e46657720eb6f1cf5c5894bd21"
  },
  {
    "url": "categories/IEEE 754/index.html",
    "revision": "863691613ceba2894234dbdc3e520137"
  },
  {
    "url": "categories/index.html",
    "revision": "4257d941132a417b7c4b70c12a26ed83"
  },
  {
    "url": "categories/JIT compiler/index.html",
    "revision": "0674f42bb1a8f1420c03bdfc471631db"
  },
  {
    "url": "categories/LLVM/index.html",
    "revision": "402a6714ff7db39e33b49d973ff2aff6"
  },
  {
    "url": "categories/MLIR/index.html",
    "revision": "716d9bd8f5d68870ea1707a306801228"
  },
  {
    "url": "categories/Python Internal/index.html",
    "revision": "2bde50417d9bbb6378747acfb716578b"
  },
  {
    "url": "categories/Virtual Machine/index.html",
    "revision": "ea47606cd43140a6e5ed506e5c607e03"
  },
  {
    "url": "coding.png",
    "revision": "c8d258d1deef44d4bc41940a8189cc16"
  },
  {
    "url": "head.gif",
    "revision": "f81fafc3939e3cc55a3e6f854b17e83f"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "ac47268e9ae0c128eee82cad8f3c9c88"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/Android/index.html",
    "revision": "27d930209f2d6b46aae773de0219e1c5"
  },
  {
    "url": "tag/Compiler/index.html",
    "revision": "4c5af6ee9ceffa2383029c6e53aabc26"
  },
  {
    "url": "tag/Compiler/page/2/index.html",
    "revision": "51eb9866f137af11d5b3f17ebfed86fa"
  },
  {
    "url": "tag/ELF/index.html",
    "revision": "def342d63c83e6ba0cf6b61ac3c35b78"
  },
  {
    "url": "tag/IEEE 754/index.html",
    "revision": "a2a6ccb30e9e5c65b57477d5fde2b273"
  },
  {
    "url": "tag/index.html",
    "revision": "15db8377858bfa57a92b47d7aeda22eb"
  },
  {
    "url": "tag/JIT compiler/index.html",
    "revision": "89f0c7875c0a0b46eaca47814547211d"
  },
  {
    "url": "tag/JIT compiler/page/2/index.html",
    "revision": "74b47a37dcdf05e7c651a06253964371"
  },
  {
    "url": "tag/Linker/index.html",
    "revision": "311dd0a379dcaf3d7d540fde6e43ed8f"
  },
  {
    "url": "tag/LLVM/index.html",
    "revision": "abfce931aba0ddbef782ae11889956fb"
  },
  {
    "url": "tag/MLIR/index.html",
    "revision": "2b49e9d7f34b56ae5bf5bf03da013762"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "7144992c2cdb15ba2fcbc199e6172624"
  },
  {
    "url": "tag/Symbol/index.html",
    "revision": "bf23959491189b26b7eb5a8ea78781fa"
  },
  {
    "url": "tag/Virtual Machine/index.html",
    "revision": "d95deecb8b2d44ce4f15d86518badca7"
  },
  {
    "url": "timeline/index.html",
    "revision": "1010e8678baf53440d27dafb25852d61"
  },
  {
    "url": "tutorial.html",
    "revision": "3d663ab6feb29d4a1ff7cd9d7be3cc8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
