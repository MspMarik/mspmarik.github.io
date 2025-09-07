function normalizeTimelineWidths() {
    let timeline_items = $("#timeline-list").children();
    for (let i = 1; (i = timeline_items.length); i++) {
        timeline_items[i].width(timeline_items[i - 1]);
    }
}

normalizeTimelineWidths();
