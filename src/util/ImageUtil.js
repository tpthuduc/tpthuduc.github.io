
function sourceLogo(displayName, image) {
    return { displayName, image: "/images/source_logos/" + image };
}
const sourceLogos = [
    sourceLogo("Tuổi Trẻ", "tuoi_tre.webp"),
    sourceLogo("PLO", "phap_luat_online.webp"),
    sourceLogo("Zing", "zing.webp"),
    sourceLogo("VTC News", "vtc.webp"),
    sourceLogo("Tin Tức TTXVN", "tin_tuc.jpg"),
    sourceLogo("Người Đô Thị", "nguoi_do_thi.jpg"),
    sourceLogo("Pháp Luật VN", "phap_luat_viet_nam.webp"),
    sourceLogo("VietnamPlus", "viet_nam_plus.jpg")
]

const defaultLogo = "/images/source_logos/rss.jpg";

export function findSourceLogo(displayName) {
    const logos = sourceLogos.find(element => element.displayName == displayName);
    if (logos) {
        return logos.image
    } else {
        return defaultLogo;
    }
}