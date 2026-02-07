import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {

    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }

    func updateUIView(_ webView: WKWebView, context: Context) {

        guard let url = Bundle.main.url(
            forResource: "index",
            withExtension: "html",
            subdirectory: "web"
        ) else {

            webView.loadHTMLString(
                "<h2>ERRO: index.html não encontrado</h2>",
                baseURL: nil
            )
            return
        }

        webView.loadFileURL(
            url,
            allowingReadAccessTo: url.deletingLastPathComponent()
        )
    }
}
