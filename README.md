WEB BLOG APLIKACIJA (Pagrindine info)
                #  web BLOG applikacija, leidžia vartotojui užsiregistruoti, prisijungti, kurti Post'us, komentuoti, 
                matyti savo postų komentarus, trinti savo postų komentarus, trinti savo postus. 
                Neregistruoti vartotojai mato visus postus, gali komentuoti visus postus,  veikia Post'u paieška  

BACK-END
        Java EE 17
        Spring Boot 3.0.0-M3
        ThymeLeaf 3.1.0.M2
        JPA
        Security
        Maven 4.0.0.
        Lombok 
        MySQL Workbench

Klasės/Ryšiai
        Programoje yra 4 POJO klasės - Comment,Post,Role,User bei enum ROLE.
        Comments -> Post (@ManyToOne)
        Post -> User (@ManyToOne)
        Post -> Comments (@OneToMany)
        Role -> Role (@ManyToMany)
        User -> Role (@ManyToMany)

Veikimas 
        /login - prisiregistravimas (email, password); 
       /register - prisijungimas (email, password); 
(pagrindiniai CRUD)
                GET admin/posts/comments/{commentId} - gauti vartotojo komentarus
                POST /admin/posts - pridėti naują įrašą 
                PUT /admin/posts/{postId}/edit - atnaujinti įrašus
                DELETE /admin/posts/comments/{commentId} -ištrinti comment


        
