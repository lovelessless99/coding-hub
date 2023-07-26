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
    "revision": "7b30fbe8dc43da6c0e91ec32358a4e9a"
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
    "url": "assets/css/0.styles.2277b98e.css",
    "revision": "799141685667cd362990f99a2ccdb5ac"
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
    "url": "assets/js/1.0bfbaed9.js",
    "revision": "dec425420b6de1ceaf6b16c9e4eea277"
  },
  {
    "url": "assets/js/10.153f0244.js",
    "revision": "624ceeb2274b2d5f38ba40424caf5a89"
  },
  {
    "url": "assets/js/11.c55c4bcd.js",
    "revision": "647a141d97fe2d54ff79a991c99554a5"
  },
  {
    "url": "assets/js/12.5069d591.js",
    "revision": "fc824cd3708520b66f3d6df99e6f3a49"
  },
  {
    "url": "assets/js/13.288e3bf1.js",
    "revision": "5178ee5caa103d88169b08541db8e532"
  },
  {
    "url": "assets/js/14.98923b0d.js",
    "revision": "0c8e080aa0f5d49a70a78d314b5fa062"
  },
  {
    "url": "assets/js/15.12c58ad1.js",
    "revision": "8faccb6743536b7b24d02726ae36b0e9"
  },
  {
    "url": "assets/js/16.0b588d4f.js",
    "revision": "159dd5e28c26ea9529028daccfb2a7c5"
  },
  {
    "url": "assets/js/17.f13925a9.js",
    "revision": "d139a8c39e6211e93eca3b03808b89f0"
  },
  {
    "url": "assets/js/18.47e56f78.js",
    "revision": "6aefa90e536fe078bbba732c9099fe66"
  },
  {
    "url": "assets/js/19.bf916fa9.js",
    "revision": "8798eabfde34a2b9e37e541f3a9d355b"
  },
  {
    "url": "assets/js/20.a4e1868f.js",
    "revision": "ee695b1db3f5d085b955384b5814920b"
  },
  {
    "url": "assets/js/21.0e84c3fb.js",
    "revision": "0be0811b2212dc5dd6696d0593b900ea"
  },
  {
    "url": "assets/js/22.c39fdcb6.js",
    "revision": "6ff88e593409e63e1e1f3c74794e1cec"
  },
  {
    "url": "assets/js/23.0e9db64a.js",
    "revision": "7fd450141854418b5ecca530e80a60ef"
  },
  {
    "url": "assets/js/24.1b64b869.js",
    "revision": "e116d3a79a8d8afece929fc92f2e068b"
  },
  {
    "url": "assets/js/25.bee36556.js",
    "revision": "3a52eccde7ff18431a2a4a814a8d088e"
  },
  {
    "url": "assets/js/26.5f1157e4.js",
    "revision": "d71e0561014f9a7443b3fa031b004ed7"
  },
  {
    "url": "assets/js/27.fa8870a1.js",
    "revision": "8493c13403421cf30a2150557f5f5254"
  },
  {
    "url": "assets/js/28.80c49a2c.js",
    "revision": "ab2e9b5620a0b2239feb95bf31ac7eff"
  },
  {
    "url": "assets/js/29.b0305a5d.js",
    "revision": "eb5f536c1f09a9effcca09ef1b5e571c"
  },
  {
    "url": "assets/js/30.ee376dfa.js",
    "revision": "7d346179e2cd076e2a5f0b6265769d90"
  },
  {
    "url": "assets/js/31.2d302251.js",
    "revision": "a9a7dc8208f9024959548caf5ece0a09"
  },
  {
    "url": "assets/js/32.1e1bc032.js",
    "revision": "88566d88e0b264fa6c8151ecc18ed40b"
  },
  {
    "url": "assets/js/33.72890909.js",
    "revision": "263b0aacb13d72adcda3e6f5ed12085d"
  },
  {
    "url": "assets/js/34.fa67bc52.js",
    "revision": "05b17fc2e5776297fd01ecd1d1c9ab3d"
  },
  {
    "url": "assets/js/35.f74092dd.js",
    "revision": "41f1b272b2da74d653c4bc8289f5eb20"
  },
  {
    "url": "assets/js/36.a847b223.js",
    "revision": "ebd549c12ee9a06ef6fb419c0d9bd677"
  },
  {
    "url": "assets/js/37.1b012f6e.js",
    "revision": "5f66c8ba46a203b7d9562ff5c3fdbf7d"
  },
  {
    "url": "assets/js/38.7628525e.js",
    "revision": "cde00a41e40af6997a22c13506485ceb"
  },
  {
    "url": "assets/js/39.f8aff88f.js",
    "revision": "f3c7170cd785e657e2b5ee26b0a81250"
  },
  {
    "url": "assets/js/40.91e31a7c.js",
    "revision": "991a0f6dac6c6bc4118cd3f57790ed2e"
  },
  {
    "url": "assets/js/41.d151ce20.js",
    "revision": "082a263e33e0990392af9cd3788842de"
  },
  {
    "url": "assets/js/42.824efee6.js",
    "revision": "81d0bb9be474c1428cda2c55eb874ead"
  },
  {
    "url": "assets/js/43.103899ed.js",
    "revision": "dc37d69657c06081ffce032acf310ebb"
  },
  {
    "url": "assets/js/44.4998e954.js",
    "revision": "4cdef075a89d5e006427f0e44c408a1d"
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
    "url": "assets/js/app.df64d80b.js",
    "revision": "beaa6b7125248ee8142d362682fe8f11"
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
    "revision": "97a998998e8a36fae82becf6f99e415b"
  },
  {
    "url": "blogs/AI_Compiler/Part0_AICompiler_Introduction.html",
    "revision": "fccc662ee6f6357c45e0c44872f201ab"
  },
  {
    "url": "blogs/ELF/dynamic.html",
    "revision": "28256f9758dee7ba116ec23ca6fbaa8a"
  },
  {
    "url": "blogs/ELF/elf_format.html",
    "revision": "7e3adaa9c794c518c94cee9ccf1076db"
  },
  {
    "url": "blogs/ELF/Introduction.html",
    "revision": "ba0ab959dc6a53cb3747c990dbf1e274"
  },
  {
    "url": "blogs/ELF/main.html",
    "revision": "2890defe05d20b20ffa0c260c1db3a4a"
  },
  {
    "url": "blogs/ELF/symbol.html",
    "revision": "0506e6cee0d2729cea842114ee9f067b"
  },
  {
    "url": "blogs/IEEE_754/IEEE754.html",
    "revision": "a8be24b41e26681feef1fe17bc4aa615"
  },
  {
    "url": "blogs/Just_in_time_compiler/JIT.html",
    "revision": "a71e68b31254b92abdc9f2089cc65db1"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part1.html",
    "revision": "7908c8157f5c657589c4f5416d3471b1"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part2.html",
    "revision": "6acded3d2b143aec56068ae467447714"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part3.html",
    "revision": "b80f6e981ad58367774228412832bfba"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part4.html",
    "revision": "5e52068194dda38ad481d124242b063c"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part5.html",
    "revision": "289929c258599cc710e486ede4bb547b"
  },
  {
    "url": "blogs/Just_in_time_compiler/Part6.html",
    "revision": "3aa204eca758489ac6208cf1b849a618"
  },
  {
    "url": "blogs/LLVM/LLVM_intro.html",
    "revision": "905b31db382b28f3d58ceb0685c34446"
  },
  {
    "url": "blogs/MLIR/MLIR.html",
    "revision": "4a6789dfde31580a79dd1a6670e367d2"
  },
  {
    "url": "blogs/Python_Internal/Part0_beginning.html",
    "revision": "ecd7c7e343d1cdffeb6f5fa48fb87042"
  },
  {
    "url": "blogs/Rpython/Introduction.html",
    "revision": "8fffb2fe4fa9e9c99ee921632b59e3cb"
  },
  {
    "url": "blogs/Rpython/Part1.html",
    "revision": "a4e02bf146ad816a4d4d410f09e4a79b"
  },
  {
    "url": "blogs/VM/android_vm.html",
    "revision": "601e63ad616b35b47722f6d23029781d"
  },
  {
    "url": "blogs/VM/BPF.html",
    "revision": "9ded771b704ad3dd66d1894898b81395"
  },
  {
    "url": "blogs/VM/Dalvik_JVM.html",
    "revision": "b9f6493a1ce647683de400a5cd7c41ed"
  },
  {
    "url": "blogs/VM/pypy.html",
    "revision": "4f39d5b99151040ed9f1d289afa0b000"
  },
  {
    "url": "blogs/VM/stack_register.html",
    "revision": "2b5e12015a19b32eee9ba81668412a3b"
  },
  {
    "url": "blogs/VM/vm_intro.html",
    "revision": "39ba4e6fc9fff5dad1e8da8aaacaf63d"
  },
  {
    "url": "categories/AI Compiler/index.html",
    "revision": "4dc2ca8069a72d858faf76c0878c4b29"
  },
  {
    "url": "categories/ELF/index.html",
    "revision": "4e3c1a790ef906e0907109f1d5cb341a"
  },
  {
    "url": "categories/IEEE 754/index.html",
    "revision": "4f3946872ff0461c9c167fee0c2ba06e"
  },
  {
    "url": "categories/index.html",
    "revision": "1dab0c630d25d065df65c913a154f561"
  },
  {
    "url": "categories/JIT compiler/index.html",
    "revision": "d45470b1f56d5381903b2df75ac45b28"
  },
  {
    "url": "categories/LLVM/index.html",
    "revision": "1c20ebd9973f47394af9646511919281"
  },
  {
    "url": "categories/MLIR/index.html",
    "revision": "947773a2ec981b615034a69ba61e7227"
  },
  {
    "url": "categories/Pypy and Rpython/index.html",
    "revision": "19fd81bcef3faed2b08ab3cbc38322d7"
  },
  {
    "url": "categories/Python Internal/index.html",
    "revision": "54874e42eda404431eb22c37eb7345bf"
  },
  {
    "url": "categories/Virtual Machine/index.html",
    "revision": "7f7e33d81f6e197a782bc279154f4f70"
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
    "revision": "7c1812cc4b60fa28f7bf6411f688a260"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/AI compiler/index.html",
    "revision": "de29ce5310b2d4197464e3ed0596d7af"
  },
  {
    "url": "tag/Android/index.html",
    "revision": "d11b323dcdd0a0272f97a43fc7a21a53"
  },
  {
    "url": "tag/Compiler/index.html",
    "revision": "e00b474dd4ee541ae611fd1cca627709"
  },
  {
    "url": "tag/Compiler/page/2/index.html",
    "revision": "2461a0f5fb87dddcfd758a5a807ac154"
  },
  {
    "url": "tag/ELF/index.html",
    "revision": "bf7b3138aacfea4f3ede86e1ae98a560"
  },
  {
    "url": "tag/IEEE 754/index.html",
    "revision": "a508cd184936e5784033a7bae8ed87ef"
  },
  {
    "url": "tag/index.html",
    "revision": "a7a61fb279aa8537f98470cd6c00c514"
  },
  {
    "url": "tag/JIT compiler/index.html",
    "revision": "f7629964e7ffdf7e91bf2f4555fd295e"
  },
  {
    "url": "tag/JIT compiler/page/2/index.html",
    "revision": "3d61ad7a095c1157a06cf7a373278215"
  },
  {
    "url": "tag/Linker/index.html",
    "revision": "3c2786f2106979a42c709d0c5a9dc48a"
  },
  {
    "url": "tag/LLVM/index.html",
    "revision": "bb7f0745009cf0b5e3f5d0e74ff50e95"
  },
  {
    "url": "tag/MLIR/index.html",
    "revision": "3ea07fa7d1bbfcb8ea8ee272f28c3ff3"
  },
  {
    "url": "tag/Pypy/index.html",
    "revision": "72bcabf1f12202d80f85575d71859039"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "e4b9ffd372048dad83b62d70316aa87e"
  },
  {
    "url": "tag/Rpython/index.html",
    "revision": "ee1f31d259a8d504fcc876d5670c9e46"
  },
  {
    "url": "tag/Symbol/index.html",
    "revision": "9ebcc90af2dff80418eb9acefc657f0f"
  },
  {
    "url": "tag/TVM/index.html",
    "revision": "5638b101f15b6b2f2cb45e8321b89ed7"
  },
  {
    "url": "tag/Virtual Machine/index.html",
    "revision": "d0f07eccb7c8fe23bb737e00f8b6abdd"
  },
  {
    "url": "timeline/index.html",
    "revision": "905be0dbfddeeadf60442aa157270e5f"
  },
  {
    "url": "tutorial.html",
    "revision": "51903cbb74d9cc464e46bf32f50d22c7"
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
