// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img  src="https://nattivos.com/wp-content/uploads/2017/12/fit5.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://th.bing.com/th/id/R.e4809318641807b15758d6250e978584?rik=N8aMFCokI9nteQ&riu=http%3a%2f%2fwww.alternativabrasil.com%2fnoticias%2fwp-content%2fuploads%2f2020%2f01%2fpraia.jpg&ehk=LZmjKCd7Cd6gx3o8qGWSxY4cdnRiW%2fecARuny2bE6JA%3d&risl=&pid=ImgRaw&r=0" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://th.bing.com/th/id/R.0619807e4455192fc2b79bf496299f1d?rik=8e3YA53SbbgSpQ&pid=ImgRaw&r=0" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://th.bing.com/th/id/R.3d0f020a7a330a20ad87369a2d783364?rik=ghVYJ%2bLzfzIsZw&pid=ImgRaw&r=0" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel