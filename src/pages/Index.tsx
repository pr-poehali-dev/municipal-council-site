import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Deputy {
  id: number;
  name: string;
  photo: string;
  education: string;
  workplace: string;
  party: string;
  achievements: string[];
}

const deputies: Deputy[] = [
  {
    id: 1,
    name: "Иванов Иван Иванович",
    photo: "https://cdn.poehali.dev/projects/f4700bf9-b986-4bdb-8748-4a7ced3b0f0d/files/b70233d5-badd-46ee-849a-cd306689791c.jpg",
    education: "Московский государственный университет, юридический факультет",
    workplace: "Директор ООО 'Строительная компания'",
    party: "Единая Россия",
    achievements: [
      "Организация ремонта детской площадки на ул. Ленина",
      "Решение вопроса освещения в микрорайоне",
      "Содействие в открытии нового медицинского пункта"
    ]
  },
  {
    id: 2,
    name: "Петрова Мария Сергеевна",
    photo: "https://cdn.poehali.dev/projects/f4700bf9-b986-4bdb-8748-4a7ced3b0f0d/files/b70233d5-badd-46ee-849a-cd306689791c.jpg",
    education: "Санкт-Петербургский экономический университет",
    workplace: "Главный бухгалтер МУП 'Водоканал'",
    party: "КПРФ",
    achievements: [
      "Установка дополнительных урн во дворах",
      "Ремонт подъездов в домах на ул. Победы",
      "Организация летних площадок для детей"
    ]
  },
  {
    id: 3,
    name: "Сидоров Петр Александрович",
    photo: "https://cdn.poehali.dev/projects/f4700bf9-b986-4bdb-8748-4a7ced3b0f0d/files/b70233d5-badd-46ee-849a-cd306689791c.jpg",
    education: "Уральский федеральный университет, инженерный факультет",
    workplace: "Инженер-технолог ОАО 'Металлургический завод'",
    party: "ЛДПР",
    achievements: [
      "Благоустройство парковой зоны",
      "Решение проблемы парковок у домов",
      "Организация спортивной площадки"
    ]
  }
];

const Index = () => {
  const [selectedDeputy, setSelectedDeputy] = useState<Deputy | null>(null);
  const [showReception, setShowReception] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6">
            <img 
              src="https://cdn.poehali.dev/projects/f4700bf9-b986-4bdb-8748-4a7ced3b0f0d/files/f4c0bccf-c486-4614-87f0-03e935f16dab.jpg" 
              alt="Герб муниципального округа" 
              className="h-24 w-24 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Совет депутатов</h1>
              <p className="text-lg opacity-90">Центральный муниципальный округ</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/f4700bf9-b986-4bdb-8748-4a7ced3b0f0d/files/1e13f164-aa71-44d6-89ae-37b51d136b96.jpg" 
          alt="Панорама округа" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Работаем для вас</h2>
            <p className="text-xl text-white/90">Открытость. Ответственность. Результат.</p>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-muted">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Депутаты муниципального округа</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {deputies.map((deputy) => (
                  <Card 
                    key={deputy.id} 
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedDeputy(deputy)}
                  >
                    <CardContent className="p-6">
                      <img 
                        src={deputy.photo} 
                        alt={deputy.name} 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-bold text-lg mb-2">{deputy.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2">
                          <Icon name="GraduationCap" size={16} className="mt-0.5 flex-shrink-0" />
                          <span>{deputy.education}</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Icon name="Briefcase" size={16} className="mt-0.5 flex-shrink-0" />
                          <span>{deputy.workplace}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Icon name="Users" size={16} className="flex-shrink-0" />
                          <span>{deputy.party}</span>
                        </p>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Подробнее
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedDeputy && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedDeputy(null)}>
                  <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold">{selectedDeputy.name}</h3>
                        <Button variant="ghost" size="icon" onClick={() => setSelectedDeputy(null)}>
                          <Icon name="X" size={20} />
                        </Button>
                      </div>
                      <img 
                        src={selectedDeputy.photo} 
                        alt={selectedDeputy.name} 
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold mb-1">Образование:</p>
                          <p className="text-muted-foreground">{selectedDeputy.education}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Место работы:</p>
                          <p className="text-muted-foreground">{selectedDeputy.workplace}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Политическая партия:</p>
                          <p className="text-muted-foreground">{selectedDeputy.party}</p>
                        </div>
                        <Separator />
                        <div>
                          <p className="font-semibold mb-3">Решенные проблемы по обращениям жителей:</p>
                          <ul className="space-y-2">
                            {selectedDeputy.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Icon name="CheckCircle2" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                    Приемная главы округа
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1">Адрес:</p>
                      <p className="text-muted-foreground">г. Москва, ул. Центральная, д. 15</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Часы приема:</p>
                      <p className="text-muted-foreground">Понедельник, среда: 14:00 - 18:00</p>
                      <p className="text-muted-foreground">Пятница: 10:00 - 14:00</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон:</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                    <Button className="w-full" onClick={() => setShowReception(true)}>
                      <Icon name="Map" size={18} className="mr-2" />
                      Как добраться
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Icon name="FileText" size={24} className="text-secondary" />
                    Информация
                  </h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="File" size={18} className="mr-2" />
                      Решения совета депутатов
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      График заседаний
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="Book" size={18} className="mr-2" />
                      Нормативные документы
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Обращения граждан
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {showReception && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowReception(false)}>
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Приемная главы муниципального округа</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowReception(false)}>
                  <Icon name="X" size={20} />
                </Button>
              </div>
              
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-muted-foreground">Интерактивная карта</p>
                  <p className="text-sm text-muted-foreground">г. Москва, ул. Центральная, д. 15</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Контактная информация</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Телефон:</p>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Email:</p>
                        <p className="text-muted-foreground">reception@mo-central.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Часы работы:</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">Как добраться</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Train" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Метро:</p>
                        <p className="text-muted-foreground">Станция "Центральная", выход №2</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Bus" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Автобус:</p>
                        <p className="text-muted-foreground">№15, 27, 43 до остановки "Администрация"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Car" size={20} className="text-secondary mt-0.5" />
                      <div>
                        <p className="font-semibold">Парковка:</p>
                        <p className="text-muted-foreground">Бесплатная парковка у здания</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@mo-central.ru
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Адрес приема</h4>
              <p className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                <span>г. Москва, ул. Центральная, д. 15<br />Понедельник, среда: 14:00 - 18:00</span>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Приемная главы</h4>
              <Button variant="secondary" className="w-full" onClick={() => setShowReception(true)}>
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Подробная информация
              </Button>
            </div>
          </div>

          <Separator className="my-6 bg-primary-foreground/20" />

          <div className="text-center text-sm opacity-80">
            <p>© 2024 Совет депутатов Центрального муниципального округа</p>
            <p className="mt-1">Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
