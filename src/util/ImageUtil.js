
function sourceLogo(name, image) {
    return { name, image: "/images/source_logos/" + image };
}
const sourceLogos = [
    sourceLogo("tuoitre.vn", "tuoi_tre.webp"),
    sourceLogo("vnexpress.net","vnexpress.webp"),
    sourceLogo("plo.vn", "phap_luat_online.webp"),
    sourceLogo("zingnews.vn", "zing.webp"),
    sourceLogo("vtc.vn", "vtc.webp"),
    sourceLogo("baotintuc.vn", "tin_tuc.jpg"),
    sourceLogo("nguoidothi.net.vn", "nguoi_do_thi.jpg"),
    sourceLogo("baophapluat.vn", "phap_luat_viet_nam.webp"),
    sourceLogo("vietnamplus.vn", "viet_nam_plus.jpg"),
    sourceLogo("thanhnien.vn","thanhnien2.png"),
    sourceLogo("dantri.com.vn","dantri.png"),
    sourceLogo("nld.com.vn","nguoilaodong.jpg"),
    sourceLogo("anninhthudo.vn","anninhthudo.png"),
    sourceLogo("baogiaothong.vn","baogiaothong.png"),
    sourceLogo("vietnamnet.vn","vietnamnet.png"),
    sourceLogo("tienphong.vn","tienphong.png")
]

const defaultLogo = "/images/source_logos/rss.jpg";

export function findSourceLogo(name) {
    const logos = sourceLogos.find(element => element.name == name);
    if (logos) {
        return logos.image
    } else {
        return defaultLogo;
    }
}