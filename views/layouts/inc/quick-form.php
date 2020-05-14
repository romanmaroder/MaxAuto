<div class="m-overlay" style="opacity: 0; display: none">
    <div class="m-modal m-modal--checkout" id="quick-checkout-dialog" style="opacity: 0; display: none;">
        <div class="m-modal-wrapper">
            <form id="quick_checkout_form"
                  action="#" accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="✓">
                <button class="m-modal-close" ></button>
                <div class="m-modal-heading">Заказ в один клик</div>
                <div class="m-modal-errors"></div>
                <input id="shipping_address_country" type="hidden" value="RU">
                <div class="m-input m-input--required ">
                    <label for="client_name" class="m-input-label">
                        Контактное лицо (ФИО):</label>
                    <input class="m-input-field" placeholder="" type="text" id="client_name"
                           name="client[name]" value=""></div>
                <div class="m-input  ">
                    <label for="client_phone" class="m-input-label">Контактный телефон:</label>
                    <input class="m-input-field" placeholder="Например: +7(926)111-11-11" type="tel" id="client_phone"
                           name="client[phone]" value="">
                </div>
                <div class="m-input  ">
                    <label for="client_email" class="m-input-label">E-mail:</label>
                    <input class="m-input-field" placeholder="" type="text" id="client_email" name="client[email]"
                           value=""></div>
                <div class="m-modal-footer">
                    <button class="m-modal-button m-modal-button--checkout button--checkout" type="submit">Оформить
                        заказ
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>