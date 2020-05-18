<div class="table-responsive">
    <table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;">
        <thead>
        <tr style="background: #f9f9f9;">
            <th style="padding: 8px; border: 1px solid #ddd;">Имя</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Телефон</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Email</th>
            <th style="padding: 8px; border: 1px solid #ddd;">Сообщение</th>
        </tr>
        </thead>
        <tbody>

            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><?= $model->name?></td>
                <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:<?=$model->phone?>"><?= $model->phone?></a></td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align:center"><a href="mailto:<?= $model->email?>"><?= $model->email?> </a></td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align:center"><?= $model->message?></td>
            </tr>
        </tbody>
    </table>
</div>
