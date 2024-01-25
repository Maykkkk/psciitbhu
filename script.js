// Your existing code...

function fnOnScroll() {
    agPosY = $(window).scrollTop();
    fnUpdateFrame();
}

function fnOnResize() {
    agPosY = $(window).scrollTop();
    agHeight = $(window).height();
    fnUpdateFrame();
}

function fnUpdateWindow() {
    agFlag = false;

    agTimelineLine.css({
        top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
        bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
    });

    f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
}

function fnUpdateProgress() {
    var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

    i = agTop + agPosY - $(window).scrollTop();
    a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
    n = agPosY - a + agOuterHeight / 2;
    i <= agPosY + agOuterHeight / 2 && (n = i - a);
    agTimelineLineProgress.css({ height: n + "px" });

    agTimelineItem.each(function () {
        var agTop = $(this).find(agTimelinePoint).offset().top;

        (agTop + agPosY - $(window).scrollTop()) < agPosY + 0.5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
    })
}

function fnUpdateFrame() {
    agFlag || requestAnimationFrame(fnUpdateWindow);
    agFlag = true;
}

// Rest of your code...


document.addEventListener("DOMContentLoaded", function() {
    const lever = document.getElementById("cylinderLever");
    const timelines = document.querySelectorAll(".timeline");

    lever.addEventListener("click", function() {
        // Determine the direction in which the lever is moved
        const leverPosition = lever.offsetLeft;

        // Calculate the corresponding timeline index
        const timelineIndex = Math.round((leverPosition / lever.parentElement.offsetWidth) * (timelines.length - 1));

        // Adjust opacity and color for each timeline
        timelines.forEach((timeline, index) => {
            if (index === timelineIndex) {
                timeline.style.opacity = "0.8"; // Adjust opacity as needed
                timeline.style.backgroundColor = "#3498db"; // Adjust color as needed
            } else {
                timeline.style.opacity = "0.2"; // Adjust opacity as needed
                timeline.style.backgroundColor = "rgba(52, 152, 219, 0.2)"; // Adjust color as needed
            }
        });
    });

    // Your jQuery code for scrolling and resizing
    $(document).ready(function() {
        $(window).on('scroll', function() {
            fnOnScroll();
        });

        $(window).on('resize', function() {
            fnOnResize();
        });

        var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }

        // Rest of your jQuery code...
    });
})(jQuery);



  
