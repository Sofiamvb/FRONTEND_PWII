export default function Transacciones({pedido}) {

const {_id, producto, comprador, vendedor, total_sin_comision, estado_pago} = pedido;

// El "|| {}" evita que truene si la API no manda el producto/usuario poblado
const {nombre_produ} = producto || {};

const {name, apellidoP} = comprador || {};

const nameVendedor = vendedor?.name;
const apellidoVendedor = vendedor?.apellidoP;



    return (

        <div
            className="
            grid
            min-h-[70px]
            grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
            items-center
            border-b
            border-[#D9D9D3]
            px-5
            text-[#252429]"
        >
            <p className="text-[13px] font-medium">
                {_id}
            </p>

            <p className="text-[13px] font-medium">
               {nombre_produ}
            </p>

            <p className="text-[13px] font-medium">
                {name} {apellidoP}
            </p>

            <p className="text-[13px] font-medium">
                {nameVendedor} {apellidoVendedor}
            </p>

            <p className="text-[13px] font-medium">
                ${total_sin_comision}
            </p>

            <div
                className="
                flex
                h-[30px]
                w-[115px]
                items-center
                justify-center
                rounded-full
                bg-[#DDF3E8]
                text-[12px]
                font-medium
                shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
            >
               {estado_pago}
            </div>
        </div>

    );
}
