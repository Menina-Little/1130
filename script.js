// ========== Vanta.js 飞鸟动画初始化 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否成功加载 Vanta.js
    if (typeof VANTA !== 'undefined' && VANTA.BIRDS) {
        try {
            // 初始化飞鸟效果
            VANTA.BIRDS({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                // 古风配色
                backgroundColor: 0x0a0a0a,
                color1: 0xd4af37,      // 金色
                color2: 0x8b0000,      // 深红色
                colorMode: "variance",
                // 飞鸟数量和速度
                birdSize: 1.2,
                wingSpan: 25.00,
                speedLimit: 5.00,
                separation: 45.00,
                alignment: 35.00,
                cohesion: 35.00,
                quantity: 3.00,        // 飞鸟数量（移动端会自动减少）
                backgroundAlpha: 0.9
            });

            console.log('✓ Vanta.js 飞鸟动画加载成功');
        } catch (error) {
            console.error('✗ Vanta.js 初始化失败:', error);
            // 如果初始化失败，使用渐变背景作为后备方案
            document.getElementById('vanta-bg').style.background =
                'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';
        }
    } else {
        console.warn('⚠ Vanta.js 库未加载，使用后备背景');
        // 后备方案：静态渐变背景
        document.getElementById('vanta-bg').style.background =
            'linear-gradient(135deg, #0f0c29, #302b63, #24243e)';
    }
});

// ========== 响应式优化 ==========
// 根据屏幕尺寸调整视频比例
function adjustVideoSize() {
    const videoWrapper = document.querySelector('.video-wrapper');
    if (videoWrapper) {
        const containerWidth = videoWrapper.parentElement.offsetWidth;
        // 在小屏幕上可以做额外调整
        if (window.innerWidth < 480) {
            videoWrapper.style.borderRadius = '8px';
        } else {
            videoWrapper.style.borderRadius = '12px';
        }
    }
}

// 页面加载和窗口调整时调用
window.addEventListener('load', adjustVideoSize);
window.addEventListener('resize', adjustVideoSize);

// ========== 性能优化：防抖函数 ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 使用防抖优化 resize 事件
const debouncedAdjustVideoSize = debounce(adjustVideoSize, 250);
window.addEventListener('resize', debouncedAdjustVideoSize);

// ========== 页面加载动画 ==========
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== 检测移动设备 ==========
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 移动设备优化提示
if (isMobile()) {
    console.log('📱 检测到移动设备，已启用移动优化');
}

// ========== 错误处理 ==========
window.addEventListener('error', function(e) {
    // 静默处理外部资源加载错误
    if (e.target.tagName === 'SCRIPT' || e.target.tagName === 'LINK') {
        console.warn('资源加载警告:', e.target.src || e.target.href);
        e.preventDefault();
    }
});

// ========== 开发者信息 ==========
console.log('%c欢迎来到AI作品集 🎨', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%c愿与君共赏AI之美', 'color: #f5f5dc; font-size: 14px;');
