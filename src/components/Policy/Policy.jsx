import React, { useEffect } from 'react'

function Policy() {
  useEffect(() => {
    document.title = "Policy"
  }, []);
  return (
    <main className="main">
      <div className="container">
        <section className="main__profile profile">
          <h1 className="profile__title title">Политика конфиденциальности в отношении обработки персональных данных</h1>
          <p className="text terms terms__text" style={{ textAlign: "right;" }}>от 4 августа 2021 <br /> обновление от 22 октября 2021
          </p>
          <p className="text terms terms__subtitle">Общие положения</p>
          <p className="text terms terms__text">Infinity Corporation – Компания, управляет собственным веб сайтом, мобильным и компьютерным приложением и ресурсами Infinity - Сервис. </p>
          <p className="text terms terms__text">Настоящая «Политика в отношении обработки персональных данных» - Политика, определяет основные принципы, цели, условия и способы обработки персональных данных, категории субъектов персональных данных и состав обрабатываемых Компанией персональных данных, действия, совершаемые с персональными данными, права субъектов персональных данных, а также содержит сведения о реализуемых требованиях по обеспечению безопасности персональных данных пользователей.</p>
          <p className="text terms terms__text">Настоящий документ информирует Пользователя о Политике Компании в отношении сбора, использования и раскрытия личных данных, когда Пользователь использует Сервис, и варианты выбора, которые Пользователь связал с этими данными. Компания использует Пользовательские данные для предоставления и улучшения Сервиса. Используя Сервис, Пользователь соглашается со сбором и использованием информации в соответствии с Политикой Компании.</p>
          <p className="text terms terms__text">Компания считает приоритетной целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>
          <p className="text terms terms__text">Политика Компании в отношении обработки персональных данных применяется ко всей информации, которую Компания может получить о Пользователях в течение всего времени пользования сайтом, ресурсами, приложением, продуктами и Сервисом Компании. </p>
          <p className="text terms terms__subtitle">Основные понятия, используемые в Политике конфиденциальности</p>
          <p className="text terms terms__text">Автоматизированная обработка персональных данных Пользователей  сети Infinity, - обработка персональных данных с помощью средств вычислительной техники.</p>
          <p className="text terms terms__text">Информационная система персональных данных, - совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий, и технических средств.</p>
          <p className="text terms terms__text">Обезличивание персональных данных, - действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.</p>
          <p className="text terms terms__text">Обработка персональных данных, это действие или совокупность действий, совершаемых с использованием средств автоматизации или без использования. Действия включают сбор, запись, систематизацию, накопление, хранение, уточнение, обновление. Помимо всего и изменение, извлечение, использование и передачу. Также предоставление, доступ, обезличивание, блокирование, удаление, уничтожение персональных данных. </p>
          <p className="text terms terms__text">Компания самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действий совершаемые с персональными данными.</p>
          <p className="text terms terms__text">Персональные данные, это любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю к сети Infinity.</p>
          <p className="text terms terms__text">Пользователь, как правило, это любой посетитель приложения, сайта и Сервиса Компании.</p>
          <p className="text terms terms__text">Уничтожение персональных данных, любое действие, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.</p>
          <p className="text terms terms__subtitle">Персональные данные Пользователя</p>

          <p className="text terms terms__text">Доступ к Фотографиям, к созданию или смене профиля пользователя, сканирование QR code, создание и загрузка любых данных.</p>
          <p className="text terms terms__text">Файлы cookie и данные об использовании необходимы для оптимизации Сервиса.</p>
          <p className="text terms terms__text">Адрес крипто-валютного кошелька создается для обеспечения работоспособности приложения.</p>
          <p className="text terms terms__text">Доступ к видеокамере предназначен для сканирования QR-кода при переводе монет.</p>
          <p className="text terms terms__text">Уникальная информация о Пользователе, такая как: Имя, никнейм в Telegram, электронная почта, никнейм профиля для упрощенных переводов, хранится на защищенных серверах Компании и собирается для оптимизации работы приложения. </p>
          <p className="text terms terms__text">Доступ к статусу сети интернет и информации о текущей сети необходим для установления VPN в браузере.</p>
          <p className="text terms terms__text">Компания не контролирует загруженные файлы, а в зашифрованном виде передает части файлов устройствам пользователей для хранения согласно алгоритму.</p>
          <p className="text terms terms__text">Компания не следит за данными трафика, не обрабатывает, не передает третьим лицам, но они проходят через устройства пользователей в зашифрованном виде согласно алгоритму.</p>
          <p className="text terms terms__subtitle">Причины обработки персональных данных Компанией</p>
          <p className="text terms terms__text">Цель обработки персональных данных Пользователя заключение, исполнение и прекращение гражданско правовых договоров; предоставление доступа Пользователю к сервисам, информации и материалам, содержащимся в приложении, сайте и в Сервисе.</p>
          <p className="text terms terms__text">Компания имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может, отказаться от получения информационных сообщений написав письмо на адрес электронной почты указанный на сайте Компании с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях». </p>
          <p className="text terms terms__text">Обезличенные данные Пользователей, собираемые с помощью сервисов интернет статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</p>
          <p className="text terms terms__text">Компания вправе использовать сторонних поставщиков услуг для мониторинга и анализа использования Сервиса. </p>
          <p className="text terms terms__text">Обработка персональных данных осуществляется Компанией для сбора и анализа информации, необходимой для улучшения работы Сервиса.</p>
          <p className="text terms terms__text">Обработка персональных данных осуществляется Компанией для обнаружения, предотвращения и устранения технических проблем при взаимодействии Пользователя с Сервисом.</p>
          <p className="text terms terms__text">Компания не осуществляет обработку персональных данных, несовместимых с первоначальными целями сбора персональных данных. </p>
          <p className="text terms terms__subtitle">Основания на обработки персональных данных</p>
          <p className="text terms terms__text">Компания обрабатывает персональные данные Пользователя только в случае разрешения на их сбор и заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте при регистрации кошелька и личного кабинета. Заполняя соответствующие формы, и/или отправляя свои персональные данные Компании, Пользователь выражает свое согласие с данной Политикой.</p>
          <p className="text terms terms__text">Компания обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя.</p>
          <p className="text terms terms__text">Компания не несет ответственности за обработку персональных данных Пользователя, если данная Политика не соответствует нормам национального и/или государственного законодательства Пользователя. В соответствии с Пользовательским соглашением, Пользователь не имеет правовых оснований использовать Сервис, и в таком случае, Пользователь самостоятельно несет ответственность за нарушение национального и/или государственного законодательства, субъектом которого он является.</p>
          <p className="text terms terms__subtitle">Сбор, хранение, передача и другие виды обработки данных</p>
          <p className="text terms terms__text">Безопасность персональных данных, которые обрабатываются Компанией, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных в юрисдикциях, определенных Пользовательским соглашением.</p>
          <p className="text terms terms__text">Компания обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
          <p className="text terms terms__text">Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства юрисдикций, определенных Пользовательским соглашением.</p>
          <p className="text terms terms__text">В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем их изменения в личном кабинете на сайте Компании.</p>
          <p className="text terms terms__text">Период обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив в Компанию уведомление посредством электронной почты на электронный адрес Компании с пометкой «Отзыв согласия на обработку персональных данных».</p>
          <p className="text terms terms__subtitle">Трансграничная передача персональных данных</p>
          <p className="text terms terms__text">Важным аспектом является - Компания до начала осуществления трансграничной передачи персональных данных обязана убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</p>
          <p className="text terms terms__text">Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</p>
          <p className="text terms terms__subtitle">Заключительное положение</p>
          <p className="text terms terms__text">Пользователь имеет право получить любые разъяснения по интересующим вопросам, касающимся обработки своих персональных данных, обратившись в Компании посредством электронной почты на сайте Компании. </p>
          <p className="text terms terms__text">В данном документе будут отражены все изменения Политики обработки персональных данных Компанией. Политика действует бессрочно до замены ее новой версией.</p>
          <p className="text terms terms__text">Актуализация настоящей Политики осуществляется на плановой основе не реже одного раза в три года, и внепланово по результатам внутреннего контроля или аудита соответствия обработки персональных данных. А также в случае изменений требований, действующего законодательства. В области организации обработки и обеспечения безопасности персональных данных юрисдикция страны, в которой осуществляет деятельность Компания. </p>
        </section>
      </div>
    </main>
  )
}

export default Policy
