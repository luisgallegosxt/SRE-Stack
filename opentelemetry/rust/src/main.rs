use actix_web::{web, App, HttpServer, Responder};

async fn hello() -> impl Responder {
    "Hello, World!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().route("/hello", web::get().to(hello))
    })
    .bind("0.0.0.0:8003")?
    .run()
    .await
}
