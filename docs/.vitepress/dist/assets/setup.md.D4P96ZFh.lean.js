import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.0sWWstMI.js";const c=JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"setup.md","filePath":"setup.md"}'),l={name:"setup.md"};function e(h,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#配置镜像源-这里比较推荐清华镜像源">配置镜像源(这里比较推荐清华镜像源)</a></li><li><a href="#安装需要的组件">安装需要的组件</a></li><li><a href="#配置国内镜像源-清华">配置国内镜像源(清华):</a><ul><li><a href="#miniconda">miniconda</a></li><li><a href="#pip设置国内源">pip设置国内源</a></li></ul></li></ul></nav><p>Linux(ubuntu) 在linux我比较推荐ubuntu，因为这可能是对于初学者入门最友好的linux操作系统，对比arch和一系列的发行版，相对来说比较稳定，那么我接下来说一下需要的组件和安装包,比较推荐22.04，相对来说不会有啥问题，包管理器还是比较稳定。</p><h2 id="配置镜像源-这里比较推荐清华镜像源" tabindex="-1">配置镜像源(这里比较推荐清华镜像源) <a class="header-anchor" href="#配置镜像源-这里比较推荐清华镜像源" aria-label="Permalink to &quot;配置镜像源(这里比较推荐清华镜像源)&quot;">​</a></h2><ol><li>网址：<a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noreferrer">清华镜像源</a></li><li>开始配置</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 跳转到/etc/apt/sources.list</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一定要加权限 不然无法修改 此处用了vim</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span></code></pre></div><p>粘贴以下内容：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noble</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restricted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> universe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multiverse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noble-updates</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restricted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> universe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multiverse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-updates main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/ubuntu/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noble-backports</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restricted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> universe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multiverse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-backports main restricted universe multiverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://security.ubuntu.com/ubuntu/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noble-security</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restricted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> universe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> multiverse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deb-src http://security.ubuntu.com/ubuntu/ noble-security main restricted universe multiverse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 预发布软件源，不建议启用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-proposed main restricted universe multiverse</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>此处vim操作是： gg 然后 dG (gg是跳转到最后一样，dG是删除到第一行) 然后保存退出，退出后在终端输入：</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><h2 id="安装需要的组件" tabindex="-1">安装需要的组件 <a class="header-anchor" href="#安装需要的组件" aria-label="Permalink to &quot;安装需要的组件&quot;">​</a></h2><ol><li>基础组件</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-essential</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fish</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> llvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clang</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clangd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnupg2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lsb-release</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>如果需要安装ros2 请参考<a href="https://dev.ros2.fishros.com/doc/Installation/Ubuntu-Install-Binary.html" target="_blank" rel="noreferrer">这篇文章</a> 我不再赘述</p></div><ol start="2"><li>安装miniconda</li></ol><ul><li>由于国内网络受限，使用本网站<a href="https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/" target="_blank" rel="noreferrer">清华源配置</a> 下载需要的脚本 然后运行shell 脚本</li><li>安装完成后输入</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 都可以输出内容即可</span></span></code></pre></div><h2 id="配置国内镜像源-清华" tabindex="-1">配置国内镜像源(清华): <a class="header-anchor" href="#配置国内镜像源-清华" aria-label="Permalink to &quot;配置国内镜像源(清华):&quot;">​</a></h2><h3 id="miniconda" tabindex="-1">miniconda <a class="header-anchor" href="#miniconda" aria-label="Permalink to &quot;miniconda&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show_channel_urls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yes</span></span></code></pre></div><p>如果要恢复到默认源，可以执行以下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --remove-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span></span></code></pre></div><p>conda 安装三方库的命令如下，这里以numpy库为例</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> numpy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">安装完成后执行如下命令，查看是否安装成功</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre></div><h3 id="pip设置国内源" tabindex="-1">pip设置国内源 <a class="header-anchor" href="#pip设置国内源" aria-label="Permalink to &quot;pip设置国内源&quot;">​</a></h3><p>以清华源为例，执行以下命令即可</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ensurepip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global.index-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://pypi.tuna.tsinghua.edu.cn/simple</span></span></code></pre></div>`,27)]))}const u=i(l,[["render",e]]);export{c as __pageData,u as default};