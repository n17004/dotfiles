"---セット---

" 行番号
set nu
" 置換をリアルタイムで確認
set inccommand=split
" クリップボード連携
set clipboard+=unnamed
" タブの幅
set tabstop=4
" 自動インデントでずれる幅
set shiftwidth=4
" 改行時に前の行のインデントを継続する
set autoindent
" 次の行のインデントを増減する
set smartindent

"------------------

" カラースキーム(deinが効かないので直接設定)
colorscheme iceberg

" ---背景透過---

augroup TransparentBG
   autocmd!
 autocmd Colorscheme * highlight Normal ctermbg=none
 autocmd Colorscheme * highlight NonText ctermbg=none
 autocmd Colorscheme * highlight LineNr ctermbg=none
 autocmd Colorscheme * highlight Folded ctermbg=none
 autocmd Colorscheme * highlight EndOfBuffer ctermbg=none 
augroup END

"------------------

"---キーバインド---

"jjでESC
inoremap <silent> jj <ESC>
"jとkで同じ行を含めて移動
nnoremap j gj
nnoremap k gk
"LeaderをSpaceキーに
let mapleader = "\<Space>"
"Space wで保存
nnoremap <Leader>w :w<CR>
"Space qで閉じる
nnoremap <Leader>q :q!<CR>
" markdown時ヴィジュアルモードでURLを選択するとリンクを生成
vnoremap <leader>mdu ygvs[](<c-r>")<esc>?[]<cr>a
"------------------

"dein Scripts-----------------------------
if &compatible
  set nocompatible               " Be iMproved
endif

" dirset in install
let s:dein_dir = expand('~/.cache/dein')

" dein.vim_dir
let s:dein_repo_dir = s:dein_dir . '/repos/github.com/Shougo/dein.vim'

if &runtimepath !~# '/dein.vim'
  if !isdirectory(s:dein_repo_dir)
    execute '!git clone https://github.com/Shougo/dein.vim' s:dein_repo_dir
  endif
  execute 'set runtimepath^=' . fnamemodify(s:dein_repo_dir, ':p')
endif

" Required:
if dein#load_state(s:dein_dir)
  call dein#begin(s:dein_dir)

  " toml file set
  let s:toml_dir = expand('~/.cache/dein')

  " 起動時に読み込むやつ
  call dein#load_toml(s:toml_dir . '/dein.toml', {'lazy': 0}) 

  " 遅延読み込みしたいやつ
  call dein#load_toml(s:toml_dir . '/dein_lazy.toml', {'lazy': 1}) 

  call dein#end()
  call dein#save_state()
endif

" Required:
filetype plugin indent on
syntax enable

" ---自動インストール---

if has('vim_starting') && dein#check_install()
  call dein#install()
endif

" ----------------------

"End dein Scripts-------------------------
