import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ng-bloglist',
    templateUrl: '../templates/bloglist.html'
})

export class AppComponent {
    blogs : Object[] = [
        {
            "avatar" : "svg-1",
            "cParam" : "salt-lake",
            "catParam" : "Snow+for+All",
            "category" : "Snow for All",
            "content" : "<p>why did this change the size of the area. I dunno!!! This is so stupid. Why will this not change the size of the dumbest thing you suck you stupid stupid stupid flex container.</p><p style=\"text-align: center;\"><span class=\"fr-video fr-dvb\" contenteditable=\"false\"><iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/6jaVp_Ln1Ss\" frameborder=\"0\" allowfullscreen=\"\"></iframe></span><br></p><p><br></p>",
            "county" : "Salt Lake",
            "date" : 1455121166921.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/camera-1149887_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "these-things-are-the-biznets",
            "postDate" : "",
            "posted" : false,
            "season" : "Spring",
            "title" : "These things are the biznets",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "Jr",
                    "content" : "<p>This is just something to add</p>",
                    "reference" : "new comment",
                    "blog" : "these-things-are-the-biznets",
                    "date" : "04/10/2016",
                    "time" : "08:48:11"
                },
                {
                    "name" : "",
                    "content" : "",
                    "reference" : "new comment",
                    "blog" : "these-things-are-the-biznets",
                    "date" : "04/11/2016",
                    "time" : "09:24:26"
                },
                {
                    "name" : "Mike",
                    "content" : "<p>This is cool</p>",
                    "reference" : "new comment",
                    "blog" : "these-things-are-the-biznets",
                    "date" : "04/11/2016",
                    "time" : "09:24:26"
                },
                {
                    "name" : "Mike",
                    "content" : "<p>This is cool</p>",
                    "reference" : "new comment",
                    "blog" : "these-things-are-the-biznets",
                    "date" : "04/11/2016",
                    "time" : "09:24:26"
                },
                {
                    "name" : "Mike",
                    "content" : "<p><strong>This is cool</strong></p>",
                    "reference" : "new comment",
                    "blog" : "these-things-are-the-biznets",
                    "date" : "04/11/2016",
                    "time" : "09:24:26"
                }
            ]
        },
        {
            "name" : "Jennifer Teagle",
            "postDate" : "",
            "date" : "04/05/2016",
            "avatar" : "",
            "url" : "/jen",
            "content" : "<p>I wanted to fix this for everyone. I hope it works. I want this to work so badly. Why doesn&apos;t it work very well? I hope this works well more so than it has been in the past. because I am super duper annoyed</p>",
            "title" : "This is a great comment",
            "category" : "Snow for All",
            "location" : "",
            "season" : "Spring",
            "county" : "Cache",
            "cparam" : "",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/Vintage+Leaf+Photos+800+x+1200.png",
            "param" : "this-is-a-great-comment",
            "posted" : true,
            "cParam" : "",
            "catParam" : "Snow+for+All",
            "comments" : [

            ]
        },
        {
            "name" : "Jennifer Teagle",
            "postDate" : "",
            "date" : "04/12/2016",
            "avatar" : "",
            "url" : "/jen",
            "content" : "<p>I made a change activate that change please</p>",
            "title" : "Change Me",
            "category" : "Snow for All",
            "location" : "",
            "season" : "Spring",
            "county" : "Davis",
            "cparam" : "",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/Remodelaholic+vintage+leaf+single.png",
            "param" : "change-me",
            "posted" : true,
            "comments" : [

            ],
            "cParam" : "",
            "catParam" : "Snow+for+All"
        },
        {
            "avatar" : "svg-1",
            "cParam" : "iron",
            "catParam" : "Snow+for+All",
            "category" : "Snow for All",
            "content" : "<p style=\"text-align: center;\"><span>The awesome thing about these photos of me with my favorite animal ever, is that they were in the wild, and I am not zoomed in. Can you believe the awesomeness!? We were walking along one of the trails and I saw them off into a pasture, so I started taking some pics and then decided, what the heck, let&apos;s see how close I can get. I have like a million pictures as I progressively got closer and closer, but these are when I was as close as I got.</span></p><p style=\"text-align: center;\"><span><a href=\"http://4.bp.blogspot.com/-BYufZ3zrPPY/T1uPxpGsOJI/AAAAAAAAJYE/yyMd8NFUPRs/s1600/Zion+239.JPG\"><img class=\"fr-dib\" src=\"http://4.bp.blogspot.com/-BYufZ3zrPPY/T1uPxpGsOJI/AAAAAAAAJYE/yyMd8NFUPRs/s1600/Zion+239.JPG\" style=\"width: 448px;\"></a></span><br></p><p style=\"text-align: center;\"><span>One of my favorite memories is that on a number of occasions I tried to zoom out, but I couldn&apos;t because I was already on the way zoomed out!<span>&nbsp;</span></span></p><p style=\"text-align: center;\"><a href=\"http://4.bp.blogspot.com/-giMkmIi02rU/T1uQUh_ki1I/AAAAAAAAJYM/eDEQzcpuHis/s1600/Zion+283.JPG\"><img class=\"fr-dii\" src=\"http://4.bp.blogspot.com/-giMkmIi02rU/T1uQUh_ki1I/AAAAAAAAJYM/eDEQzcpuHis/s1600/Zion+283.JPG\" style=\"width: 443px;\"></a><br></p><p><span>(Dad) You should definitely click on the photos to make them larger to see the detail in the photos. I love how in the last couple pictures you can see the curly hair in the deer&apos;s ears.</span></p><p style=\"text-align: center;\"><br></p><p style=\"text-align: center;\"><a href=\"http://3.bp.blogspot.com/-g_l2XScOhhc/T1uQ8seEkCI/AAAAAAAAJYU/bhZbvWZaS64/s1600/Zion+318.JPG\"><img class=\"fr-dii\" src=\"http://3.bp.blogspot.com/-g_l2XScOhhc/T1uQ8seEkCI/AAAAAAAAJYU/bhZbvWZaS64/s1600/Zion+318.JPG\" style=\"width: 443px;\"></a><a href=\"http://3.bp.blogspot.com/-OvQZ2W0yo18/T1uRlecg6AI/AAAAAAAAJYs/GYefpniZ21k/s1600/Zion+330.JPG\"><img class=\"fr-dii\" src=\"http://3.bp.blogspot.com/-OvQZ2W0yo18/T1uRlecg6AI/AAAAAAAAJYs/GYefpniZ21k/s1600/Zion+330.JPG\" style=\"width: 443px;\"></a><br></p><p style=\"text-align: center;\"><span>The big buck wasn&apos;t moving so I walked away to get capture some more photos of the doe&apos;s.</span></p><p style=\"text-align: center;\"><a href=\"http://3.bp.blogspot.com/-6pyLpcR8kFM/T1uSCW3N68I/AAAAAAAAJZA/bM0Q2qQJtEY/s1600/Zion+363.JPG\"><img class=\"fr-dii\" src=\"http://3.bp.blogspot.com/-6pyLpcR8kFM/T1uSCW3N68I/AAAAAAAAJZA/bM0Q2qQJtEY/s1600/Zion+363.JPG\" style=\"width: 443px;\"></a><br></p><p style=\"text-align: center;\"><span>But one of the buck&apos;s I was eyeing walked over towards the other, so I followed it over again.</span></p><p style=\"text-align: center;\"><a href=\"http://1.bp.blogspot.com/-3966QqtL6D8/T1uStJwwhHI/AAAAAAAAJZQ/OoK0SVFUtOM/s1600/Zion+387.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-3966QqtL6D8/T1uStJwwhHI/AAAAAAAAJZQ/OoK0SVFUtOM/s1600/Zion+387.JPG\" style=\"width: 445px;\"></a><br></p><p style=\"text-align: center;\"><a href=\"http://2.bp.blogspot.com/-zp_r1oZ3YxM/T1uTbxJBy9I/AAAAAAAAJZY/D6Dnt4dSIG0/s1600/Zion+389.JPG\"><img class=\"fr-dii\" src=\"http://2.bp.blogspot.com/-zp_r1oZ3YxM/T1uTbxJBy9I/AAAAAAAAJZY/D6Dnt4dSIG0/s1600/Zion+389.JPG\" style=\"width: 444px;\"></a><br></p><p style=\"text-align: center;\"><span>And then I walked right on up to it again.</span></p><p><br></p><p style=\"text-align: center;\"><a href=\"http://1.bp.blogspot.com/-WbaqnCF0aAg/T1uUCt7xmoI/AAAAAAAAJZg/lmSxJ59YGXI/s1600/Zion+394.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-WbaqnCF0aAg/T1uUCt7xmoI/AAAAAAAAJZg/lmSxJ59YGXI/s1600/Zion+394.JPG\" style=\"width: 451px;\"></a><a href=\"http://1.bp.blogspot.com/-HVskp04jQZU/T1uUsCYlX5I/AAAAAAAAJZo/MSUD1bFbg4g/s1600/Zion+426.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-HVskp04jQZU/T1uUsCYlX5I/AAAAAAAAJZo/MSUD1bFbg4g/s1600/Zion+426.JPG\" style=\"width: 450px;\"></a><a href=\"http://1.bp.blogspot.com/-glnstT8Yon4/T1uV1okgMXI/AAAAAAAAJZ8/CuAsm666ABg/s1600/Zion+504.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-glnstT8Yon4/T1uV1okgMXI/AAAAAAAAJZ8/CuAsm666ABg/s1600/Zion+504.JPG\" style=\"width: 449px;\"></a><a href=\"http://1.bp.blogspot.com/-piY2H5HJVw0/T1uVNbf4B0I/AAAAAAAAJZ0/UI1-fDpkdr8/s1600/Zion+490.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-piY2H5HJVw0/T1uVNbf4B0I/AAAAAAAAJZ0/UI1-fDpkdr8/s1600/Zion+490.JPG\" style=\"width: 448px;\"></a><br></p><p style=\"text-align: center;\"><span>I asked Mike to come get a photo of me by the deer. I had spent probably 30 minutes with them and they were letting me get a few feet away from them, literally. But when Mike came with me, it kinda spooked them and they ran away before I got too close.</span></p><p style=\"text-align: center;\"><a href=\"http://1.bp.blogspot.com/-_yrfOxvN3sI/T1uV9vK_mJI/AAAAAAAAJaE/BbI68ydfRPo/s1600/Zion+554c.jpg\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-_yrfOxvN3sI/T1uV9vK_mJI/AAAAAAAAJaE/BbI68ydfRPo/s1600/Zion+554c.jpg\" style=\"width: 454px;\"></a><br></p><p style=\"text-align: center;\"><span>So Mike left and I attempted to get close to them again.</span></p><p style=\"text-align: center;\"><a href=\"http://3.bp.blogspot.com/-dt_qCFOiX5o/T1uWdhan-OI/AAAAAAAAJaM/fJZKKDMw3LQ/s1600/Zion+575.JPG\"><img class=\"fr-dii\" src=\"http://3.bp.blogspot.com/-dt_qCFOiX5o/T1uWdhan-OI/AAAAAAAAJaM/fJZKKDMw3LQ/s1600/Zion+575.JPG\" style=\"width: 453px;\"></a><br></p><p style=\"text-align: center;\"><span>Then I walked a little closer:</span></p><p style=\"text-align: center;\"><a href=\"http://1.bp.blogspot.com/-nm1k_cvyNY4/T1uW-MYCigI/AAAAAAAAJaU/RGh00FqpvSI/s1600/Zion+582.JPG\"><img class=\"fr-dii\" src=\"http://1.bp.blogspot.com/-nm1k_cvyNY4/T1uW-MYCigI/AAAAAAAAJaU/RGh00FqpvSI/s1600/Zion+582.JPG\" style=\"width: 449px;\"></a><br></p><p style=\"text-align: center;\"><span>I was literally like two to three feet away from these beautiful creatures:</span></p><p style=\"text-align: center;\"><a href=\"http://4.bp.blogspot.com/-lKO4jN4CsSE/T1uXgrevH0I/AAAAAAAAJac/AjLhPJ2vejI/s1600/Zion+583.JPG\"><img class=\"fr-dii\" src=\"http://4.bp.blogspot.com/-lKO4jN4CsSE/T1uXgrevH0I/AAAAAAAAJac/AjLhPJ2vejI/s1600/Zion+583.JPG\" style=\"width: 449px;\"></a><br></p><p style=\"text-align: center;\"><span>Then it ran away, but stopped to look back at me (I think it was half hoping i would follow):</span></p><p style=\"text-align: center;\"><a href=\"http://3.bp.blogspot.com/-PtGu19xaZ4A/T1uYGyh0kkI/AAAAAAAAJak/eYEvCfMVB2E/s1600/Zion+586.JPG\"><img class=\"fr-dii\" src=\"http://3.bp.blogspot.com/-PtGu19xaZ4A/T1uYGyh0kkI/AAAAAAAAJak/eYEvCfMVB2E/s1600/Zion+586.JPG\" style=\"width: 443px;\"></a><br></p><p style=\"text-align: center;\"><span>It was such an amazing day - the hiking was good but the deer - well... they were AMAZING!</span></p>",
            "county" : "Iron",
            "date" : 1454110109451.0,
            "datenight" : true,
            "destination" : false,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/boat-cropped.jpg",
            "kids" : false,
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "mule-deer-in-southern-utah",
            "posted" : true,
            "season" : "Winter",
            "title" : "Mule Deer in Southern Utah",
            "url" : "/mkteagle.github.io/blog/app/jen",
            "comments" : [
                {
                    "name" : "new man",
                    "content" : "<p>This is a comment</p>",
                    "reference" : "new comment",
                    "blog" : "mule-deer-in-southern-utah",
                    "date" : "04/09/2016",
                    "time" : "19:53:47"
                },
                {
                    "name" : "Mike",
                    "content" : "<p>I am a new comment</p>",
                    "reference" : "new comment",
                    "blog" : "mule-deer-in-southern-utah",
                    "date" : "04/10/2016",
                    "time" : "23:41:12"
                },
                {
                    "name" : "Jr",
                    "content" : "<p>A new comment is what?</p>",
                    "reference" : "new comment",
                    "blog" : "mule-deer-in-southern-utah",
                    "date" : "04/10/2016",
                    "time" : "23:41:12"
                }
            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "san-juan",
            "catParam" : "fun+in+the+sun",
            "category" : "Fun in the Sun",
            "content" : "<p>Zip lining in the Dominican Republic? Why not? I heard about zip lining and that was it. I wanted to do it. There are a few different places we looked at and we narrowed it down to <a href=\"http://www.yasikaadventures.com/index.html\" target=\"_blank\">Yasika Adventures Zip Lining</a> and the <a href=\"http://www.monkeyjungledr.com/site/index.php\" target=\"_blank\">Monkey Jungle Zip Line Adventures.</a></p><p><br></p><p>The Highlights of Yasika:</p><p>- They come pick you up and drop you off</p><p>- 10 platforms/8 zip lines</p><p>- Reach heights of 985 feet above the ground (speeds up to 30 mph)</p><p>- Fruit Cocktail at the end</p><p><br></p><p>The Highlights of the Monkey Jungle Zip Line Adventures:</p><p>- They come pick you up and drop you off</p><p>- All proceeds go to charity (100% of your purchase goes to an <a href=\"http://www.monkeyjungledr.com/site/index.php?option=com_content&view=article&id=92&Itemid=205\" target=\"_blank\">on-site medical/dental facility</a>)</p><p>- 7 Stations, 3 suspense bridges and a descender into a cave</p><p>- If you are worried about safety, this is the only ACCT certified zip line on the North Coast of the Dominican Republic.</p><p>- For a combined donation you get to visit the Monkey Jungle &amp; Zip Line Adventures which means you get to feed monkeys and check out that area.</p><p><br></p><p>As you probably guessed from the title of this post, we ended up going to Yasika Adventures Zip Lining because it fit into our schedule better. But I would love to go back and check out the Monkey Jungle Zip Line Adventure sometime. It just sounds awesome. Descending into a cave!? Feeding monkeys!? It all sounds super fun to me.</p><p><br></p><p>The Yasika Adventure team came and picked us up in a Safari truck and drove us approximately 30 minutes to their course where we suited up and headed to the first zip line.</p><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>I love riding in Safari trucks. No windows is my favorite thing ever!<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>The ride up to the Yasika Adventure Zip Line Course was beautiful!<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>10 Stations and 8 Zip Lines<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>Me and Jen suited up and ready to go.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>First person to test out the zip lines and make sure they are safe ;)<br>(nobody else wanted to go first so I didn&apos;t even have to fight for it) I was stoked at this point!<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>Mike giving it a go!<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>One of the 10 platforms on the Zip Line course.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>The engineering behind the zip line course.<br></td></tr></tbody></table><p><a href=\"http://3.bp.blogspot.com/-OzKHwMG94f0/T-J2SW_HfVI/AAAAAAAAPrU/Yv1w2jsoXUw/s1600/DR+3+243ps.jpg\"></a></p><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>I really wanted to zip line backwards or something and add a little more thrill to the ride.<br>Most people have something like Jiminy Cricket in their mind telling them what to do and what not to do. I have Mike to tell me what&apos;s safe and what&apos;s not.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>Home Base aka the Last Platform<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>Our mouths are open and it&apos;s the only group picture we got. This is an example of why you should say CHEESE when someone tells you to say ZIP LINE.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>Mike was awesome! He does not like heights yet he did every single zip line like a champion. No hesitation just maybe closed eyes ;0) He said it wasn&apos;t too bad - he just didn&apos;t look down a lot. Before we went I asked him on a scale of 1 to 10 how excited he was. He said a 0. I said, &quot;Mike! You have to at least be a 1 or a 2 because you are doing it and you know you don&apos;t have to do it!&quot; I don&apos;t know if he will ever zip line again - but I think he enjoyed it this time around.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>This little Yasika Adventure helper climbed up the passion fruit tree to get us some fresh fruit. It looks shorter than it was because I was looking down on him, but it was a pretty tall tree and he scaled it like it was nothing. (To be young and live in a jungle.)<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>The fresh Fruit Cocktail at the end of the course.<br></td></tr></tbody></table><table align=\"center\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td>We laid some fruit on the bar of the hut and lizards(?) started coming out of the woodwork to eat it. (Seriously in a 5 foot span I counted almost 15 lizards at one time.) In the top right picture, can you see all three lizards - they are awesome at camouflage.<br></td></tr></tbody></table><a href=\"http://3.bp.blogspot.com/-OzKHwMG94f0/T-J2SW_HfVI/AAAAAAAAPrU/Yv1w2jsoXUw/s1600/DR+3+243ps.jpg\">The course went by super quickly! I feel like all 5 of us did it in around 30 minutes. I was bummed. I wanted to go again. I am excited to try out other courses though because I will be zip lining again :)</a><p></p><p><br></p>",
            "county" : "San Juan",
            "date" : 1456098023350.0,
            "destination" : true,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/hiker-1149877_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "yasika-adventures-zip-lining-the-dominican-republic",
            "postDate" : "",
            "posted" : true,
            "season" : "Memorial Day",
            "title" : "Yasika Adventures Zip Lining the Dominican Republic",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "mkteagle",
                    "content" : "<p>This was actually super duper cool thing to see</p>",
                    "reference" : "new comment",
                    "blog" : "yasika-adventures-zip-lining-the-dominican-republic",
                    "date" : "04/09/2016",
                    "time" : "08:14:22"
                }
            ]
        },
        {
            "avatar" : "",
            "cParam" : "morgan",
            "catParam" : "mike",
            "category" : "Mike",
            "content" : "<p>This is some content and it needs to be fixed so it looks right. Yes it does I say so. Agree with me please!!!</p>",
            "county" : "Morgan",
            "date" : "03/20/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/grapes-690230_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "you-sir-rock-sir",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "You sir rock sir",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "avatar" : "",
            "catParam" : "snow+for+all",
            "category" : "Snow for All",
            "content" : "<p><span class=\"fr-video fr-dvb\" contenteditable=\"false\"><iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/qrHFg47Mopk\" frameborder=\"0\" allowfullscreen=\"\"></iframe></span>I want to make sure some things are working so I am checking all of this information first. I hope it actually works and will continue to work.</p><p><img class=\"fr-dib\" src=\"https://secure.gravatar.com/avatar/3f47c28141ef251e1e9caa51830090c1?d=https%3A%2F%2Fi.vimeocdn.com%2Fportrait%2Fdefault-gray_300x300.png&amp;s=300\" style=\"width: 300px;\"><br></p>",
            "county" : "Cache",
            "cparam" : "cache",
            "date" : "03/23/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/man-1150058_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "adding-some-spices-to-your-life",
            "postDate" : "",
            "posted" : true,
            "season" : "Winter",
            "title" : "Adding some spices to your life",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "avatar" : "",
            "catParam" : "Fun+in+the+Sun",
            "category" : "Fun in the Sun",
            "content" : "<p>We need some type of content in this area. yes we do!!!! :)</p>",
            "county" : "Cache",
            "cparam" : "",
            "date" : "03/30/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/hiker-1149877_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "sir-sir",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "Sir Sir",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "avatar" : "",
            "cParam" : "",
            "catParam" : "Snow+for+All",
            "category" : "Snow for All",
            "content" : "<p>Hello there I am your friend. For sure I will be there for you!!!</p>",
            "county" : "Box Elder",
            "cparam" : "",
            "date" : "03/31/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/hiker-1149877_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "hello-there",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "Hello There",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "avatar" : "",
            "cParam" : "",
            "catParam" : "Snow+for+All",
            "category" : "Snow for All",
            "content" : "<p>This is a new post and I really like it I suppose</p>",
            "county" : "Cache",
            "cparam" : "",
            "date" : "03/31/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/pexels-photo-30063.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "me-sir",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "Me sir",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "name" : "Jennifer Teagle",
            "postDate" : "",
            "date" : "04/05/2016",
            "avatar" : "",
            "url" : "/jen",
            "content" : "<p>could it be any cooler?</p>",
            "title" : "Why?",
            "category" : "Snow for All",
            "location" : "",
            "season" : "",
            "county" : "Cache",
            "cparam" : "",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/Vintage+Leaf+Photos+800+x+1200.png",
            "param" : "why",
            "posted" : true,
            "cParam" : "",
            "catParam" : "Snow+for+All",
            "comments" : [

            ]
        },
        {
            "name" : "Jennifer Teagle",
            "postDate" : "",
            "date" : "04/05/2016",
            "avatar" : "",
            "url" : "/jen",
            "content" : "<p>We went paragliding at the point of the mountain. And man was it amazing. Show you the pictures later. I really don&apos;t know why this doesn&apos;t show the whole blogs immediately though.</p>",
            "title" : "Paragliding in Lehi UT",
            "category" : "Fun in the Sun",
            "location" : "",
            "season" : "",
            "county" : "Utah",
            "cparam" : "",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/WP+016.jpg",
            "param" : "paragliding-in-lehi-ut",
            "posted" : true,
            "cParam" : "",
            "catParam" : "Fun+in+the+Sun",
            "comments" : [

            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "carbon",
            "catParam" : "Fun+in+the+Sun",
            "category" : "Fun in the Sun",
            "content" : "<p>Valentines Day is going to be the best this year Madison already loves everything about it, and she will keep on loving it too. I can&apos;t believe this blog thing is working so well for me. Need to fix some things Need to add some featured images to the blog. I hope I can upload a featured image to each blog post.&nbsp;</p>",
            "county" : "Carbon",
            "date" : 1454133325089.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/canoeing-1081890_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "third-fourth-and-fifth-two",
            "postDate" : "01252016",
            "posted" : true,
            "season" : "Valentines Day",
            "title" : "Third, Fourth and Fifth Two",
            "url" : "/mkteagle.github.io/blog/app/jen",
            "comments" : [
                {
                    "name" : "mike",
                    "content" : "this is cool content",
                    "reference" : "new comment",
                    "blog" : "third-fourth-and-fifth-two",
                    "date" : "04/06/2016",
                    "time" : "20:49:38"
                },
                {
                    "name" : "mike",
                    "content" : "this is cool content",
                    "reference" : "new comment",
                    "blog" : "third-fourth-and-fifth-two",
                    "date" : "04/06/2016",
                    "time" : "20:58:42"
                }
            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "box-elder",
            "catParam" : "snow+for+all",
            "category" : "Snow for All",
            "content" : "<p>I needed to check and see if this thing would work and it does work although for now it got rid of froala for whatever reason that stupid thing. This thing is so weird that it got rid of the froala thing and than came back for whatever reason this dumbo thing.</p><p><br></p><h1>I can be as cool as I want to be!!!!~~~~~~</h1><p><br></p><p>and then we are cooler than that. We be cool giants man!!! The coolest giants.</p>",
            "county" : "Box Elder",
            "date" : 1454882313487.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/hiker-1149877_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "what-is-this-crap-this-is-our-editor",
            "posted" : true,
            "season" : "Spring",
            "title" : "What is this crap this is our editor",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "mike",
                    "content" : "this is cool content",
                    "reference" : "new comment",
                    "blog" : "what-is-this-crap-this-is-our-editor",
                    "date" : "04/06/2016",
                    "time" : "21:01:48"
                },
                {
                    "name" : "mike",
                    "content" : "this is cool content",
                    "reference" : "new comment",
                    "blog" : "what-is-this-crap-this-is-our-editor",
                    "date" : "04/06/2016",
                    "time" : "21:01:48"
                }
            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "cache",
            "catParam" : "snow+for+all",
            "category" : "Snow for All",
            "content" : "<p>nudder post</p>",
            "county" : "Cache",
            "date" : 1455200688069.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/hiker-1149877_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "hello-there-tito",
            "postDate" : "",
            "posted" : true,
            "season" : "New Years",
            "title" : "Hello There Tito",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "Mike is the leader",
                    "content" : "<p>What is going on?</p>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "17:37:40"
                },
                {
                    "name" : "Here we go again to save the day",
                    "content" : "<p>What is this?</p>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "17:56:25"
                },
                {
                    "name" : "Can I call you my leader",
                    "content" : "<p>What?</p>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "18:06:23"
                },
                {
                    "name" : "Can I call you my leader",
                    "content" : "<p>&lt;h3&gt;What?&lt;/h3&gt;</p>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "18:06:23"
                },
                {
                    "name" : "Can I call youstupid?",
                    "content" : "<p><strong>&lt;h3&gt;What?&lt;/h3&gt;</strong></p>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "18:06:23"
                },
                {
                    "name" : "Numero points",
                    "content" : "<p class=\"fr-text-bordered\">Why is this so important to have a text editor that does this for once I want to know</p><ol><li>Point one you are dumb</li><li>Point two who cares about you</li><li>Point three my short shorts and tight pants are on!!!</li></ol>",
                    "reference" : "new comment",
                    "blog" : "hello-there-tito",
                    "date" : "04/10/2016",
                    "time" : "18:06:23"
                }
            ]
        },
        {
            "avatar" : "",
            "cParam" : "duchesne",
            "catParam" : "mike",
            "category" : "Mike",
            "content" : "<p>Mike Teags is the ruler of all rules. He Rocks!!! Jennifer loves *Nsync for all time and eternity!!!! This thing rocks if I can figure out how to add the stupid amazon aws s3 upload to the image uploader for froala than I think we got something going on. I hope I can do it.</p>",
            "county" : "Duchesne",
            "date" : 1458524174465.0,
            "datenight" : true,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/canoeing-1081890_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "mike-teagle-is-the-ruler",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "Mike Teagle is the ruler",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "My comment",
                    "content" : "<p>My comment goes here</p>",
                    "reference" : "new comment",
                    "blog" : "mike-teagle-is-the-ruler",
                    "date" : "04/10/2016",
                    "time" : "14:28:26"
                },
                {
                    "name" : "Tight Pants",
                    "content" : "<p>No one cares about my tight pants. I got my tight pants on!!!</p>",
                    "reference" : "new comment",
                    "blog" : "mike-teagle-is-the-ruler",
                    "date" : "04/10/2016",
                    "time" : "18:06:23"
                }
            ]
        },
        {
            "avatar" : "",
            "cParam" : "millard",
            "catParam" : "mike",
            "category" : "Mike",
            "content" : "<p>Just making sure it captured the date correctly.</p><p><span class=\"fr-video fr-dvb\" contenteditable=\"false\"><iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/Eo-KmOd3i7s\" frameborder=\"0\" allowfullscreen=\"\"></iframe></span><br></p>",
            "county" : "Millard",
            "date" : "03/19/2016",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/camera-1149887_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "nsync",
            "postDate" : "",
            "posted" : true,
            "season" : "",
            "title" : "*Nsync",
            "url" : "/jen",
            "comments" : [
                {
                    "name" : "what?",
                    "content" : "<p>Why?</p>",
                    "reference" : "new comment",
                    "blog" : "nsync",
                    "date" : "04/10/2016",
                    "time" : "19:54:58"
                },
                {
                    "name" : "what the hello",
                    "content" : "<p>I can&apos;t stand this... Why?</p>",
                    "reference" : "new comment",
                    "blog" : "nsync",
                    "date" : "04/10/2016",
                    "time" : "19:54:58"
                },
                {
                    "name" : "why is this this way",
                    "content" : "<p>I can&apos;t stand this... Why?</p>",
                    "reference" : "new comment",
                    "blog" : "nsync",
                    "date" : "04/10/2016",
                    "time" : "19:54:58"
                },
                {
                    "name" : "Michael Teagle",
                    "content" : "<p>This is a commenter</p>",
                    "reference" : "new comment",
                    "blog" : "nsync",
                    "date" : "04/10/2016",
                    "time" : "21:20:56"
                }
            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "carbon",
            "catParam" : "fun+in+the+sun",
            "category" : "Fun in the Sun",
            "content" : "<p>And can we type something. Something here what is it going to be? I also want this to elipse on the posts page and to be filtered out like it really wants to be filtered out of. Why is this acting so slow right now. I dunno. I don&apos;t think it should be this slow do you? what is going on with this crappy crappy crappy chrome.</p>",
            "county" : "Carbon",
            "date" : 1454132293225.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/grapes-690230_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "this-is-a-nudder-post-for-sure",
            "postDate" : "01012016",
            "posted" : true,
            "season" : "New Years",
            "title" : "This is a nudder post for sure",
            "url" : "/mkteagle.github.io/blog/app/jen",
            "comments" : [

            ]
        },
        {
            "avatar" : "svg-1",
            "cParam" : "cache",
            "catParam" : "snow+for+all",
            "category" : "Snow for All",
            "content" : "<p>This is one bad a cookie and it works perfectly. And I love it. This is lovely yes it is. I also need to decide what options to put in here!!! She is strong and smart and important. She was wearing her mittens are on the wrong hand.</p><p><br></p><p><br></p><p><strong>This can be so cool if I want it to be cool!!!!</strong></p><p><br></p><p><br></p><p><br></p><p>What the heck?</p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><pre>What do you call this??? this is some code!!!</pre>",
            "county" : "Cache",
            "date" : 1454950637058.0,
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/man-1150058_1280-1180x570.jpg",
            "location" : "",
            "name" : "Jennifer Teagle",
            "param" : "this-is-just-a-placeholder-and-it-works",
            "postDate" : "",
            "posted" : true,
            "season" : "New Years",
            "title" : "This is just a placeholder and it works",
            "url" : "/jen",
            "comments" : [

            ]
        },
        {
            "name" : "Jennifer Teagle",
            "postDate" : "",
            "date" : "04/12/2016",
            "avatar" : "",
            "url" : "/jen",
            "content" : "<p><span>We spent the morning debating on whether or not to drive 30 minutes to celebrate Dr. Seuss&apos;s birthday in Salt Lake. Right when the party was scheduled to start I thought, &quot;What the heck, let&apos;s go.&quot; The decision made for an amazing morning and we will definitely be going next year too!&nbsp;</span></p><p>KUED and Discovery Gateway hold a birthday party for Dr. Seuss right outside of the museum. So it&apos;s free, but if you decide to go to the museum after, you will only have to pay for admission! The birthday party provided age-appropriate activities for my almost two and a half year old.</p><p>They had an area where she got to color on the wall (sign a birthday card for Dr. Seuss).</p><p>An area where she got to color/decorate a hat, just like the cat in the hat.</p><p>Oh and the Cat in the Hat was there! My daughter had never watched the Cat in the Hat before and wasn&apos;t really sure who he was. She was so intrigued by him, kept looking for him and asking where he was, but then saying, &quot;Don&apos;t come near me.&quot; LoL. After the party I brought her home and turned on the Cat in the Hat show and I am pretty sure next year she is going to be thrilled to see him.</p><p>They had an adorable area set up for photos and some cute photo props. My daughter had a great time playing in the hot air balloon and with the stuffed animals. It was a bonus when the cat in the hat came and joined her for a pic. Of course then she couldn&apos;t stop looking at him. You could tell she was just processing the fact that he was standing behind her.</p><p>There was a place for the kids to watch the show, and read Dr. Seuss books.</p><p>An area where they got a snack (goldfish crackers) and were able to sort them by colors on a &quot;One Fish, Two Fish&quot; Dr. Seuss inspired activity sheet with them. That was super cute.</p><p>There was an area where they used noodles to create a line and then traced it and colored the sheet.</p><p>They also had a science area where she used soda cans as a telephone. That was a little old for her but she enjoyed it all the same.</p><p>Overall, the party had a lot of little things that really added up to make it great. She had a fun time going from one area to another and then back again. It was a smaller room so I had an easy time keeping track of her and was able to join her in some of the activities too. I can&apos;t wait to take her back next year and once again celebrate Dr. Seuss&apos;s birthday! I think it will be even more fun because I am going to make sure she knows more about Dr. Seuss by then!</p>",
            "title" : "Dr. Seuss Birthday Party",
            "category" : "Sponsered",
            "location" : "",
            "season" : "Spring",
            "county" : "Salt Lake",
            "cparam" : "",
            "featured" : "https://s3-us-west-2.amazonaws.com/doingutahdaily/FullSizeRender.jpg",
            "param" : "dr-seuss-birthday-party",
            "posted" : true,
            "comments" : [

            ],
            "cParam" : "",
            "catParam" : "Sponsered"
        }

    ]
}

