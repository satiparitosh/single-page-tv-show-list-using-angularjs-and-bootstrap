var app = angular.module('myapp',[]);
app.controller('mycontroller',function($scope){
    $scope.shows = [
        {
            title:  "Sherlock",
            Date:new Date(2010, 11, 31, 21, 00, 00, 00),
            icon:   "https://s3.amazonaws.com/codecademy-content/projects/4/bolt-network-2/img/sherlock.jpg",
            Genre:  "Mystery,Suspense",
            Description:"Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
            Seasons: 4
        },
        {
            title:  "Breaking Bad",
            Date:new Date(2008, 08, 05, 21, 00, 00, 00),
            icon:   "https://wallpaperplay.com/walls/full/3/d/7/158893.jpg",
            Genre:  "Drama,Crime",
            Description:"Set in Albuquerque, New Mexico between 2008 and 2010,Breaking Bad follows Walter White as he is transformed from a meek high school science teacher who wants to provide for his family into a ruthless player in the local methamphetamine drug trade as a result of being diagnosed with terminal lung cancer. Initially making only small batches of meth with his former student Jesse Pinkman in a rolling meth lab, Walter and Jesse eventually expand to make larger batches of a special blue meth that is incredibly pure and creates high demand. Walter takes on the name 'Heisenberg' to mask his identity. Because of his drug-related activities, Walt eventually finds himself at odds with his family, the Drug Enforcement Administration (DEA) through his brother-in-law Hank Schrader, the local gangs, and the Mexican drug cartels and their regional distributors, putting his life at risk.",
            Seasons: 5
        },
        {
            title:  "Legion",
            Date:new Date(2017, 02, 05, 21, 00, 00, 00),
            icon:   "http://media.cdn.shoutengine.com/cache/c4/2c/c42c33f567b9c8a5b320a272a98a18a6.jpg",
            Genre:  "Sci-fiction,fantasy",
            Description:"David Haller was diagnosed with schizophrenia at a young age and has been a patient in various psychiatric hospitals since with the latest one having him placed in there by his adoptive sister Amy Haller. After Haller has an encounter with a fellow psychiatric patient, he is confronted with the possibility that there may be more to him than mental illness where an incident led to the death of his friend Lenore 'Lenny' Busker. Hunted by the government agency Division 3 in the first season, Haller is saved by a group of mutants at a facility called Summerland, who explain that he is also a mutant. Haller eventually discovers that his mind is infected by the parasitic mutant Amahl Farouk / Shadow King, and is able to force the villain from his mind.In the second season, Haller returns after a year spent trapped in a mysterious orb. In his absence, his Summerland allies have joined forces with Division 3 to stop Farouk's plan to find his real body and amass world-ending power. ",
            Seasons: 3
        },
        {
            title:  "Justified",
            Date:new Date(2010, 05, 10, 21, 00, 00, 00),
            icon:   "https://is1-ssl.mzstatic.com/image/thumb/Video/v4/0b/88/c6/0b88c658-ec1d-300b-ade0-d36607f25587/mzl.zhuihrxd.lsr/268x0w.png",
            Genre:  "Mystery,Suspense",
            Description:"Deputy U.S. Marshal Raylan Givens is something of a 19th-century-style, Old West lawman living in modern times, whose unconventional enforcement of justice makes him a target of criminals and a problem child to his U.S. Marshals Service superior. In response to his controversial but 'justified' quick-draw shooting of mob hitman Tommy Bucks in Miami, Givens is reassigned to Lexington, Kentucky. The Lexington Marshals office's jurisdiction includes Harlan County, where Raylan was raised and which he thought he had escaped for good in his youth.Season 2 deals primarily with the criminal dealings of the Bennett clan. Family matriarch Mags Bennett (Margo Martindale) and her three sons Dickie (Jeremy Davies), Coover (Brad William Henke), and Doyle (Joseph Lyle Taylor), Chief of Bennett Hollow Police, plan to expand their marijuana business into Crowder territory following Bo's death, as Boyd has proven somewhat reluctant to follow in his father's footsteps.",
            Seasons: 4
        },
        
    ]
});