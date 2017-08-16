var constant = require("to-constant-case");
var each = require("each");

exports.edge_types = index({
    0:  "Parent",
    1:  "Content",
    2:  "Admin",
    3:  "Moderator",
    4:  "Contributor",
    5:  "Member",
    6:  "Follower",
    7:  "Like",
    8:  "Author",
    9:  "Verifier",
    10: "Submission",
    11: "Hours",
    12: "Revision",
    13: "Location",
    14: "Email",
    15: "Partner",
    16: "Proxy",
    17: "Relationship",
    18: "Transfer Admin",
    19: "Host"
});

exports.event_types = index([
    "Celebration",
    "Culinary Arts",
    "Demonstrations",
    "Discussions",
    "Educational",
    "Family",
    "Films",
    "Fundraising",
    "Just for Fun",
    "Lecture",
    "Performance",
    "Workshop",
    "(Other)",
    "Conferences"
]);

exports.group_types = index({
    3: "Course",
    4: "Academic Department/Program",
    5: "Office",
    6: "Center/Institute",
    7: "Division",
    8: "Museum",
    9: "Clinic",
    10: "Network/Coalition",
    11: "Co-Curricular"
});

exports.opportunity_types = index({
    "-1": "Offline",
    0: "Internship",
    1: "Paying Job",
    2: "Volunteer Service",
    3: "Mentoring",
    4: "Tutoring",
    5: "Service Learning",
    6: "Performance"
});

exports.organization_types = index({
    "-1": "Offline",
    0: "Community Group",
    1: "Educational Institution",
    2: "For-profit",
    3: "Non-profit",
    4: "Government",
    5: "Social/Civic",
    6: "Youth Association",
    7: "Unaffiliated Individual"
});

exports.activity_types = index([
    "Teaching",
    "Research/Creative",
    "Service"
]);

exports.activity_focuses = index([
    "Arts and Culture",
    "Education",
    "Community and Economic Development",
    "Government/Public Safety",
    "Environment and Sustainability",
    "Health and Wellness",
    "Social Issues"
]);

exports.roles = index({
    1: "Noblehour Admin",
    2: "Admin",
    3: "Moderator",
    4: "Contributor",
    5: "Member",
    6: "Follower"
});

exports.submission_statuses = index({
    0: "Unsubmitted",
    1: "Approved",
    2: "Denied",
    3: "Pending"
});

exports.vertex_types = index({
    0: "News",
    1: "Group",
    2: "Organization",
    3: "Opportunity",
    4: "Activity",
    5: "Event",
    6: "Customer",
    7: "User",
    8: "Submission",
    9: "Submission History",
    10: "Hours",
    11: "Address",
    12: "Asset",
    13: "Url",
    14: "Hours Set",
    15: "Email",
    16: "Relationship",
    17: "Goal",
    18: "Invite",
    19: "Proxy",
    20: "Program",
    21: "Partnership"
});

exports.activity_types = index([
    "Create",
    "Update",
    "Delete"
]);

exports.asset_types = index({
    0: "notype",
    1: "aif",
    2: "doc",
    3: "docx",
    4: "gif",
    5: "jpg",
    6: "mov",
    7: "mp3",
    8: "mpg",
    9: "odp",
    10: "odt",
    11: "oga",
    12: "ogf",
    13: "pdf",
    14: "png",
    15: "pps",
    16: "ppsx",
    17: "ppt",
    18: "pptx",
    19: "txt",
    20: "wma",
    21: "wmv",
    22: "xls",
    23: "xlsx",
    24: "rtf"
});

exports.relationship_types = index({
    1: "Student",
    2: "Faculty",
    3: "Staff",
    8: "Assistant professor",
    9: "Associate professor",
    10: "Professor",
    11: "Other instructional role",
    12: "Clinician",
    14: "Adjunct instructor",
    16: "Profile Holder",
    17: "Executive leadership",
    18: "Leader of a center, office, or institute",
    19: "Support for units or programs"
});

exports.collaborator_types = index({
    "-1": "None",
    0: "Community Partner",
    1: "Institutional Partner",
    2: "Campus Partner",
    3: "Faculty/Staff",
    4: "Course",
    5: "Program"
});

function index(list) {
    var by_name = {};
    var by_id = {};

    each(list, !!list.length ? array : add);

    function array(name, id) {
        add(id, name);
    }

    function add(id, name) {
        by_id[id] = name;
        by_name[constant(name)] = parseInt(id, 10);
    }

    return {
        by_id: by_id,
        by_name: by_name
    };
}
