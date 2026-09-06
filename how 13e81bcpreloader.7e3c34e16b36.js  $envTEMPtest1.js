[33mcommit db06fa891ec7050ca49bbdfe61fc84befdba1b85[m
Author: Revan <terter59095914@gmail.com>
Date:   Thu Aug 6 23:44:02 2026 +0400

    fix closing bracket syntax

[1mdiff --git a/butilochka.cdnvideo.ru/bottle/html/preloader.7e3c34e16b36.js b/butilochka.cdnvideo.ru/bottle/html/preloader.7e3c34e16b36.js[m
[1mindex 6fa6266..805701c 100644[m
[1m--- a/butilochka.cdnvideo.ru/bottle/html/preloader.7e3c34e16b36.js[m
[1m+++ b/butilochka.cdnvideo.ru/bottle/html/preloader.7e3c34e16b36.js[m
[36m@@ -140347,7 +140347,7 @@[m [mconst preload = (htmlRoot, splash) => __awaiter(void 0, void 0, void 0, function[m
   if (!social.canDisableVerticalSwipes) {[m
     root.supressTouchScroll();[m
   }[m
[31m-  [m
[32m+[m
   // 2. İndi aşağıdakı sətirlər rahatlıqla işləyəcək, çünki social artıq var:[m
   IS_MOBILE = social.isMobile;[m
   root.scrollToTopAfterInput = true;[m
[36m@@ -140419,7 +140419,7 @@[m [mconst preload = (htmlRoot, splash) => __awaiter(void 0, void 0, void 0, function[m
     showPreloaderError(factory, e, social);[m
     return;[m
   }[m
[31m-  const config = {[m
[32m+[m[32m const config = {[m
     adaptivePlayer: !IS_MOBILE,[m
     allowNativeAppPromo,[m
     autoplayRequiresUserAction,[m
[36m@@ -140455,7 +140455,7 @@[m [mconst preload = (htmlRoot, splash) => __awaiter(void 0, void 0, void 0, function[m
     showPreloaderError(factory, e, social);[m
     throw e;[m
   }[m
[31m-});[m
[32m+[m[32m}[m
 function run(env, factory, social, config, splash) {[m
   return __awaiter(this, void 0, void 0, function* () {[m
     var _a;[m
