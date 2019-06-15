if g:dein#_cache_version !=# 100 || g:dein#_init_runtimepath !=# '/home/hara/.cache/dein/repos/github.com/Shougo/dein.vim/,/home/hara/.config/nvim,/etc/xdg/xdg-ubuntu/nvim,/etc/xdg/nvim,/home/hara/.local/share/nvim/site,/usr/share/ubuntu/nvim/site,/usr/local/share/nvim/site,/usr/share/nvim/site,/var/lib/snapd/desktop/nvim/site,/usr/share/nvim/runtime,/var/lib/snapd/desktop/nvim/site/after,/usr/share/nvim/site/after,/usr/local/share/nvim/site/after,/usr/share/ubuntu/nvim/site/after,/home/hara/.local/share/nvim/site/after,/etc/xdg/nvim/after,/etc/xdg/xdg-ubuntu/nvim/after,/home/hara/.config/nvim/after' | throw 'Cache loading error' | endif
let [plugins, ftplugin] = dein#load_cache_raw(['/home/hara/.config/nvim/init.vim', '/home/hara/.cache/dein/dein.toml', '/home/hara/.cache/dein/dein_lazy.toml'])
if empty(plugins) | throw 'Cache loading error' | endif
let g:dein#_plugins = plugins
let g:dein#_ftplugin = ftplugin
let g:dein#_base_path = '/home/hara/.cache/dein'
let g:dein#_runtime_path = '/home/hara/.cache/dein/.cache/init.vim/.dein'
let g:dein#_cache_path = '/home/hara/.cache/dein/.cache/init.vim'
let &runtimepath = '/home/hara/.cache/dein/repos/github.com/Shougo/dein.vim/,/home/hara/.config/nvim,/etc/xdg/xdg-ubuntu/nvim,/etc/xdg/nvim,/home/hara/.local/share/nvim/site,/usr/share/ubuntu/nvim/site,/usr/local/share/nvim/site,/usr/share/nvim/site,/var/lib/snapd/desktop/nvim/site,/home/hara/.cache/dein/repos/github.com/Shougo/dein.vim,/home/hara/.cache/dein/.cache/init.vim/.dein,/usr/share/nvim/runtime,/home/hara/.cache/dein/.cache/init.vim/.dein/after,/var/lib/snapd/desktop/nvim/site/after,/usr/share/nvim/site/after,/usr/local/share/nvim/site/after,/usr/share/ubuntu/nvim/site/after,/home/hara/.local/share/nvim/site/after,/etc/xdg/nvim/after,/etc/xdg/xdg-ubuntu/nvim/after,/home/hara/.config/nvim/after'
filetype off
let g:lightline = { 'colorscheme': 'seoul256', }
let g:user_emmet_leader_key='<c-f>'
let g:deoplete#enable_at_startup = 1
