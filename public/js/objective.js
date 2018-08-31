$(function(){
  
   var title = $('#title'),
        skill1 = $('#skill1'),
        skill2 = $('#skill2'),
        skill3 = $('#skill3'),
        accomplishment = $('#accomplishment'),
        softSkill1= $('#softSkill1'),
        softSkill2 = $('#softSkill2'),
        softSkill3 = $('#softSkill3'),
        mission = $('#mission');
    
    title.keyup(function(){
      $('#title-output').text(title.val());
    })
    
    skill1.keyup(function(){
      $('#skill1-output').text(lastName.val());
    })
    
    skill2.keyup(function(){
      $('#skill2-output').text(skill2.val());
    })
    
    skill3.keyup(function(){
      $('#skill3-output').text(noun.val());
    })
    
    accomplishment.keyup(function(){
      $('#accomplishment-output').text(accomplishment.val());
    })
    
    softSkill1.keyup(function(){
      $('#softSkill1-output').text(softSkill1.val());
    })
    
    softSkill2.keyup(function(){
      $('#softSkill2-output').text(softSkill2.val());
    })
    
    softSkill3.keyup(function(){
      $('#softSkill3-output').text(softSkill3.val());
    })
    
    mission.keyup(function(){
      $('#mission-output').text(mission.val());
    })
    
    
    $('button').on('click', function(){
      $('.madlib-output').toggle('fast');
    })
    
  })